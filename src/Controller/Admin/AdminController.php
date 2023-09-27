<?php

namespace App\Controller\Admin;

use App\Entity\Tour;
use App\Entity\Evento;
use App\Entity\Reserva;
use App\Entity\CartItems;
use App\Form\EventoFormType;
use App\Entity\DetallesReserva;
use App\Repository\GuiaRepository;
use App\Repository\TourRepository;
use App\Repository\UserRepository;
use App\Repository\EventoRepository;
use App\Repository\ReservaRepository;
use App\Repository\CalendarioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Csrf\CsrfTokenManager;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{

    #[Route('/admin/guia', name: 'guia')]
    public function guia(EventoRepository $eventoRepository, UserRepository $repoUser): Response
    {
        $events = $eventoRepository->findAll();
        $tours = [];

        foreach ($events as $event) {
            $tour = $event->getTour();
            $detallesReserva = $event->getDetallesReserva();
            $reservas = $event->getReservas();

            if ($tour !== null && $detallesReserva !== null && $reservas !== null) {
                $fecha_evento = $detallesReserva->getFechaEvento();
                $fecha_fin = $detallesReserva->getFechaEvento();
                $id_reserva = $reservas->getId();


                $tours[] = [
                    "id" => $id_reserva,
                    "titulo" => $tour->getTitulo(),
                    "inicio" => $fecha_evento->format('Y-m-d H:i:s'),
                    "fin" => $fecha_fin->format('Y-m-d H:i:s'),
                    "cantidadAsistentes" => $detallesReserva->getCantidad()
                ];
            }
        }

        $data = json_encode($tours);

        return $this->render("admin/guia.html.twig", [
            'data' => $data
        ]);
    }

    #[Route('/admin/store', name: 'store', methods: ['POST'])]
    public function store(Request $request, ValidatorInterface $validator)
    {
        // Obtener todos los datos de la solicitud
        $requestData = $request->request->all();

        // Validar los datos utilizando el Validador de Symfony
        $eventoForm = $this->createForm(EventoFormType::class, $requestData);
        $eventoForm->handleRequest($requestData);

        // Verificar si hay errores de validación
        // $errors = $validator->validate($eventoForm->getData());

        // if (count($errors) > 0) {
        //     $errorMessages = [];
        //     foreach ($errors as $error) {
        //         $errorMessages[$error->getPropertyPath()] = $error->getMessage();
        //     }
        //     return new JsonResponse(['errors' => $errorMessages], 400);
        // }

        // Devolver los datos como respuesta en formato JSON
        return new JsonResponse($requestData);
    }







    // Si $detallesReserva es null, crea una nueva instancia de DetallesReserva
    // if ($detallesReserva == null) {
    //     $detallesReserva = new DetallesReserva();
    // }

    // $guia = $repoUser->findUsers('["ROLE_GUIA"]'); 

    // $reserva = new Reserva();

    // $detallesReserva = $reserva->getDetallesReservas();
    // $tour = $reserva->getTour();

    // dd($detallesReserva);

    // $reserva->setUser($guia)
    //     ->setTour($tour)
    //     ->setDetallesReservas($detallesReserva);

    // $tours = [];

    // foreach ($reservas as $reserva) {
    //     $tour = $reserva->getTour();
    //     $detallesReserva = $reserva->getDetallesReserva();

    //     // Asegúrate de que el tour y los detalles de reserva existan
    //     if ($tour !== null && $detallesReserva !== null) {
    //         $tours[] = [
    //             "id" => $reserva->getId(),
    //             "titulo" => $tour->getTitulo(),
    //             "guia" => $reserva->getUser()->getNombre() . ' ' . $reserva->getUser()->getApellidos(),
    //             "personal" => $detallesReserva->getNumeroPersonal(),
    //             "horario" => $tour->getHoraInicio() . " - " . $tour->getHoraFin(),
    //             "Pax" => $detallesReserva->getCantidad(),
    //         ];
    //     }
    // }



    // if (!$tours) {
    //     throw $this->createNotFoundException('Tour no encontrado');
    // }
    // $sliders = $this->em->getRepository(Slider::class)->findBy(['tour' => $tours]);


    // return $this->render('app/tour.html.twig', [
    //     'tour' => $tours,
    //     'sliders' => $sliders,
    // ]);
    // $events = $calendario->findAll();
    // $tours = [];

    // foreach ($events as $event) {
    //     $producto = $event->getProducto();
    //     $reserva = $event->getReservas();
    //     $usuario = $event->getUsuario();
    //     if ($producto !== null) {
    //         $tours[] = [
    //             "id" => $event->getId(),
    //             "titulo" => $producto->getTitulo(),
    //             "descripcion" => $event->getDescripcion(),
    //             "inicio" => $event->getInicio()->format('Y-m-d H:i:s'),
    //             "fin" => $event->getFin()->format('Y-m-d H:i:s'),
    //             "allDay" => $event->isAllDay(),
    //             "backgroundColor" => $event->getBgColor(),
    //             "borderColor" => $event->getBorderColor(),
    //             "textColor" => $event->getTextColor()
    //         ];
    //     }
    // }

    // $data = json_encode($tours);

    // $evento = new Evento();

    // if ($this->crearEvento($evento, $request, $em)) {
    //     return $this->redirectToRoute('guia');
    // }

    // #[Route('/admin/guia/{id}', name: 'evento')]
    // public function evento(Request $request, EntityManagerInterface $em, CartItems $cartItems, Evento $evento): Response
    // {
    //     if($evento == null) {
    //         $evento = new Evento;
    //     }
    //     $form = $this->createForm(EventoFormType::class, $evento);
    //     $form->handleRequest($request);

    //     $guia = $evento->getGuia();
    //     $cartItems = $evento->getCartItems();

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         // Obtén el valor del campo efectivo del formulario
    //         $efectivo = $form->get('efectivo')->getData();

    //         // Calcula la recaudación y actualiza la entidad Evento
    //         $recaudacion = $efectivo; // Asumiendo que el primer item de cartItems tiene la cantidad
    //         $evento->setEfectivo($efectivo)
    //             ->setRecaudacion($recaudacion)
    //             ->setGuia($guia)
    //             ->setCartItems($cartItems);          

    //         // Persiste y guarda los cambios
    //         $em->persist($evento);
    //         $em->flush();

    //         // Retorna una respuesta exitosa
    //         $this->addFlash('success', "Evento actualizado con éxito");
    //         return true; // Indica que la creación o actualización fue exitosa
    //     }

    //     return false; // Indica que hubo un error en la creación o actualización
    // }



    // #[Route('/admin/store', name: 'store', methods: ['POST'])]
    // public function store(Request $request, ValidatorInterface $validator)
    // {
    // Obtener todos los datos de la solicitud
    // $requestData = $request->request->all();

    // Validar los datos utilizando el Validador de Symfony
    // $eventoForm = $this->createForm(EventoFormType::class, $requestData);
    // $eventoForm->handleRequest($requestData);

    // Verificar si hay errores de validación
    // $errors = $validator->validate($eventoForm->getData());

    // if (count($errors) > 0) {
    //     $errorMessages = [];
    //     foreach ($errors as $error) {
    //         $errorMessages[$error->getPropertyPath()] = $error->getMessage();
    //     }
    //     return new JsonResponse(['errors' => $errorMessages], 400);
    // }

    // Devolver los datos como respuesta en formato JSON
    //     return new JsonResponse($requestData);
    // }
}
