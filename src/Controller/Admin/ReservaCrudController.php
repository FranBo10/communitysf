<?php

namespace App\Controller\Admin;

use App\Entity\Reserva;
use App\Controller\Admin\GuiaCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ReservaCrudController extends AbstractCrudController
{
    use Trait\SoloLecturaTrait;

    public static function getEntityFqcn(): string
    {
        return Reserva::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $usuariosField = TextField::new('usuarios', 'Nombre de Usuario');

        // Configurar el campo 'usuarios' para que sea visible solo en la vista de índice.
        if ($pageName == Crud::PAGE_INDEX) {
            return [
                IdField::new('id')->hideOnForm(),
                $usuariosField,
                // Otros campos aquí...
            ];
        } else {
            // Configurar los campos para otras páginas (formulario de edición, etc.).
            return [
                IdField::new('id')->hideOnForm(),
                AssociationField::new('guia', 'Guía')
                    ->setCrudController(GuiaCrudController::class)
                    ->setRequired(true)
                    ->autocomplete()
                    ->setFormTypeOptions([
                        'class' => 'App\Entity\Guia',
                        'label' => 'Guía'
                    ]),
                ChoiceField::new('estado')->setChoices(['El pedido se encuentra en la cesta' => 'El pedido se encuentra en la cesta', 'confirmado' => 'confirmado']),
                DateTimeField::new('fecha_registro')->setFormat('d/M/Y à H:m:s')->hideOnForm(),
                // Otros campos aquí...
            ];
        }
    }
}
