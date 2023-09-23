<?php

namespace App\Controller;

use App\Entity\Tour;
use App\Entity\Slider;
use App\Entity\Reserva;
use App\Repository\TourRepository;
use App\Repository\ReservaRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\DetallesReservaRepository;
use Symfony\Component\HttpFoundation\Request;
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
        $sliders = $this->em->getRepository(Slider::class)->findBy(['tour' => $tours]);


        return $this->render('app/tour.html.twig', [
            'tour' => $tours,
            'sliders' => $sliders,
        ]);
    }

    #[Route('/cuenta', name: "cuenta")]
    public function miCuenta(Request $request)
    {
        $currentRoute = $request->get('_route');
        $currentPage = $currentRoute === 'cuenta';

        return $this->render('cliente/cuenta.html.twig', [
            'currentPage' => $currentPage
        ]);
    }

    #[Route('/reservas', name: 'reservas')]
    public function reserva(
        ReservaRepository $reservaRepository, DetallesReservaRepository $detallesReservaRepository
    ): Response {

        $reservas = $reservaRepository->findAll(); 
        $detallesReservas = $detallesReservaRepository->findAll();     


        return $this->render('cliente/reservas.html.twig', [
            'reservas' => $reservas,
            'detallesReservas' => $detallesReservas 
        ]);
    }
}

// ReservaRepository $reservaRepository,
//         DetallesReservaRepository $detallesReservaRepository
//     ): Response {
//         // Obtener todas las reservas desde el repositorio
//         $reservas = $reservaRepository->findAll();
//         $detallesReserva = [];

//         foreach ($reservas as $reserva) {
//             // Obtener los detalles de reserva asociados a esta reserva
//             $detallesReserva[] = $detallesReservaRepository->findBy(['reservas' => $reserva]);
//         }


//         return $this->render('cliente/reservas.html.twig', [
//             'detallesReserva' => $detallesReserva,
//             'reservas' => $reservas, // Pasa también las reservas para poder mostrarlas en la vista si es necesario
//         ]);
