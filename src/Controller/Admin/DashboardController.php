<?php

namespace App\Controller\Admin;


use App\Entity\Guia;
use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Evento;
use App\Entity\Slider;
use App\Entity\Cliente;
use App\Entity\Reserva;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{

    public function __construct(private AdminUrlGenerator $adminUrlGenerator)
    {
    }
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $url = $this->adminUrlGenerator->setController(ReservaCrudController::class)->generateUrl();

        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Community');
    }

    public function configureMenuItems(): iterable
    {
        return [
            MenuItem::linkToDashboard('BACKOFFICE', 'fa fa-home'),
            MenuItem::section('Ir a web'),
            MenuItem::linkToRoute('Página principal', 'fa fa-igloo', 'home'),
            MenuItem::section('Acceso guia'),
            MenuItem::linkToCrud('Usuarios', 'fas fa-user', User::class),
            MenuItem::linkToCrud('Reservas', 'fa fa-comment', Reserva::class),
            MenuItem::section('SuperAdmin'),
            MenuItem::linkToCrud('Guias', 'fas fa-user', Guia::class),
            MenuItem::linkToCrud('Tours', 'fa fa-book', Tour::class),
            MenuItem::linkToCrud('Eventos', 'fa fa-calendar', Evento::class),
            MenuItem::linkToCrud('Sliders', 'fa fa-robot', Slider::class),
            MenuItem::linkToCrud('Clientes', 'fa fa-users', Cliente::class),
        ];
    }
}
