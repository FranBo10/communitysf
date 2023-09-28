<?php

namespace App\Controller\Admin;

use App\Entity\DetallesReserva;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DetallesReservaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return DetallesReserva::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            // Configura los campos de tu formulario aquí
        ];
    }
    
}
