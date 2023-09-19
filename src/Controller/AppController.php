<?php

namespace App\Controller;

use App\Entity\Tour;
use App\Entity\Slider;
use App\Repository\TourRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppController extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/', name: 'home')]
    public function index(TourRepository $repo): Response
    {
        $tours = $repo->findAll();

        return $this->render('app/index.html.twig', [
            'tours' => $tours,
        ]);
    }

    #[Route('/tour/{id}', name: 'tour')]
    public function tour($id): Response
    {
        $tours = $this->em->getRepository(Tour::class)->find($id);

        if (!$tours) {
            throw $this->createNotFoundException('Tour no encontrado');
        }
        $sliders = $this->em->getRepository(Slider::class)->findBy(['tours' => $tours]); 


        return $this->render('app/tour.html.twig', [
            'tours' => $tours,
            'sliders' => $sliders,
        ]);
    }
}
