<?php

namespace App\Controller;

use App\Entity\Contacto;
use App\Form\ContactoFormType;
use App\Service\ContactoService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactoController extends AbstractController
{
    #[Route('/contacto', name: 'contacto')]
    public function index(Request $request, ContactoService $cs): Response
    {
        $contacto = new Contacto;

        $form = $this->createForm(ContactoFormType::class, $contacto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contacto = $form->getData();
            $cs->persistContacto($contacto);

            return $this->redirectToRoute('contacto');
        }


        return $this->render('contacto/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
