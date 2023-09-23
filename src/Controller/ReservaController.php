<?php

namespace App\Controller;

use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Reserva;
use App\Form\UserFormType;
use App\Entity\DetallesReserva;
use App\Form\DetallesReservaFormType;
use App\Repository\ReservaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReservaController extends AbstractController
{

    private $em;

    private $rs;

    public function __construct(EntityManagerInterface $em, RequestStack $rs)
    {
        $this->em = $em;
        $this->rs = $rs;
    }

    #[Route('/reserva/{id}', name: 'show')]
    public function show(Request $request, EntityManagerInterface $em, Tour $tour, DetallesReserva $detallesReserva = null)
    {
        if ($detallesReserva == null) {
            $detallesReserva = new DetallesReserva;
        }

        $reserva = new Reserva();

        $reserva->setUser($this->getUser())
            ->setEstado('Añadir guía')
            ->setReferencia(uniqId())
            ->setFechaEvento(new \DateTime())
            ->setTour($tour);

        $form = $this->createForm(DetallesReservaFormType::class, $detallesReserva);
        $form->handleRequest($request);

        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $precio = $tour->getPrecio();

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidad = $cantidadAdultos + $cantidadKids;
            $totalReserva = $cantidad * $precio;
        } else {
            // Manejar el caso en el que una o ambas variables sean nulas
            $totalReserva = 0; // O cualquier valor predeterminado que desees
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $detallesReserva->setId($detallesReserva->getId())
                ->setCantidad($cantidad)
                ->setTotalReserva($totalReserva)
                ->setUsers($this->getUser());

            $reserva->addDetallesReserva($detallesReserva);
            $em->persist($reserva);
            $em->flush();
            $this->addFlash('success', 'Su reserva ha sido confirmada, puede encontrar los detalles en su perfil', [
                'duration' => 5
            ]);
            return $this->redirectToRoute('validar_reserva', ['id' => $reserva->getId()]);
        }

        return $this->render('app/show.html.twig', [
            'tour' => $tour,
            'form' => $form,
            'detallesReserva' => $detallesReserva,
            'cantidad' => $cantidad,
            'totalReserva' => $totalReserva,
            'reserva' => $reserva,
            'cantidadAdultos' => $cantidadAdultos,
            'id' => $detallesReserva->getId(),
        ]);
    }

    #[Route('/validar_reserva/{id}', name: 'validar_reserva')]
    public function validarReserva($id, ReservaRepository $repo, Request $request)
    {
        // Obtener la reserva específica del usuario (la que acaba de crear)
        $reserva = $repo->find($id);

        if (!$reserva) {
            throw $this->createNotFoundException('Reserva no encontrada');
        }

        $tour = $reserva->getTour();
        $detallesReserva = $reserva->getDetallesReservas();

        $user = new User;
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $nombre = $user->getNombre();
            $apellidos = $user->getApellidos();
            $user->setNombre($nombre)
                ->setApellidos($apellidos);
            $this->em->persist($user);
            $this->em->flush();
            $this->rs->getSession()->getFlashBag()->add('success', 'Su reserva ha sido conformada, gracias.');
        }

        return $this->render('app/validar_reserva.html.twig', [
            'reserva' => $reserva,
            'tour' => $tour,
            'userForm' => $form->createView()
        ]);
    }





    // $tour = $repo->find($id);
    // $cartWithData[] = [
    // 'tour' => $tour,
    // 'cantidad' => $cantidad,
    // ];
    // }
    // //initialisation quantité total
    // $qt = 0;
    // //récupérer montant total de la commande
    // $total = $cs->total();

    // //set se qui ne change pas

    // foreach ($cartWithData as $data) :
    // //récupération du stock
    // $stock = $data['tour']->getStock();

    // //si la différence entre mon stock et ma quantité de tour achété est positive
    // if ($stock - $data['cantidad'] >= 0) {
    // //add mon tour a la commande
    // $reserva->addtour($data['tour']);
    // //j'ajoute la quantité de se tour a ma quantité total
    // $qt += $data['cantidad'];
    // //du coup on modifie les stock avec le nouveau stock
    // $data['tour']->setStock($stock - $data['cantidad']);
    // } else {
    // $this->addFlash('danger', "vous avez dépassez le nombre de t-shirt $data[tour] disponible nous avons modifier votre quantité de ce tour");

    // $cs->modifQuantite($data['tour']->getId(), $data['tour']->getStock());

    // return $this->redirectToRoute('app_cart');
    // }
    // endforeach;
    // $reserva->setCantidad($qt);
    // $manager->persist($reserva);
    // $manager->flush();
    // $cs->deleteCart();
    // $this->addFlash('success', 'Su reserva ha sido confirmada, puede encontrar los detalles en su perfil', [
    // 'duration' => 5 // Especifica la duración en segundos
    // ]);
    // return $this->redirectToRoute('app_app');
    // }
    // }
}
