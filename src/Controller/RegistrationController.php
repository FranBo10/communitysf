<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Service\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/registro', name: 'registro')]
    public function registro(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, MailerService $mailerService, TokenGeneratorInterface $tokenGeneratorInterface): Response
    {
        $user = new User();
        $avatars = [];
        for ($i = 1; $i <= 24; $i++) {
            $nameAvatar = "avatar_" . $i;
            $avatars[] = $nameAvatar;
        }

        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $token = $tokenGeneratorInterface->generateToken();
            $avatar = $form->get('avatar')->getData();
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $user->setToken($token)
                ->setAvatar($avatar)
                ->setRoles($user->getRoles("ROLE_USER"))
                ->setFechaRegistro(new \Datetime);


            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email
            $mailerService->send(
                $user->getEmail(),
                'Confirmacion de su cuenta',
                'confirmation_email.html.twig',
                [
                    'user' => $user,
                    'token' => $token,
                    'token_life_time' => $user->getTokenLifeTime()->format('d/m/y a las H\hi')
                ]
            );

            $this->addFlash('success', 'Le hemos enviado un e-mail para verificar su cuenta');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('registration/registro.html.twig', [
            'registrationForm' => $form->createView(),
            'avatars' => $avatars,
        ]);
    }

    #[Route('/verify/{token}/{id\d+>}', name: 'account_verify', methods: ['GET'])]
    public function verifyUserEmail($token, User $user, EntityManagerInterface $entityManager): Response
    {
        if ($user->getToken() !== $token) {
            throw new AccessDeniedException();
        }

        if ($user->getToken() === null) {
            throw new AccessDeniedException();
        }

        if (new \DateTime('now') > $user->getTokenLifeTime()) {
            throw new AccessDeniedException();
        }

        $user->setIsVerified(true);
        $user->setToken(null);
        $entityManager->flush();

        $this->addFlash("success", "Su cuenta ha sido verificada con éxito, ya puede conectarse");

        return $this->redirectToRoute('app_login');
    }
}
