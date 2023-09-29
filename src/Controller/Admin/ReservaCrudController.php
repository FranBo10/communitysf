<?php

namespace App\Controller\Admin;

use App\Entity\Reserva;
use Doctrine\ORM\EntityManagerInterface;
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
    // use Trait\SoloLecturaTrait;
    private $entityManager;

    // Inyecta el EntityManager a través del constructor
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public static function getEntityFqcn(): string
    {
        return Reserva::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $usuariosField = TextField::new('usuarios', 'Nombre de Usuario');

        // Configurar el campo 'usuarios' para que sea visible solo en la vista de índice.
        // if ($pageName == Crud::PAGE_INDEX) {
        //     return [
        //         IdField::new('id')->hideOnForm(),
        //         $usuariosField,
        //         // Otros campos aquí...
        //     ];
        // } else {
        // Configurar los campos para otras páginas (formulario de edición, etc.).
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('user', 'User')
                ->setCrudController(UserCrudController::class)
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\User',
                    'label' => 'User'
                ]),
            ChoiceField::new('estado')->setChoices(['El pedido se encuentra en la cesta' => 'El pedido se encuentra en la cesta', 'confirmado' => 'confirmado']),
            DateTimeField::new('fecha_registro')->setFormat('d/M/Y à H:m:s')->hideOnForm(),
            // Otros campos aquí...
        ];
        // }
    }

    public function createEntity(string $entityFqcn)
    {
        $reserva = new $entityFqcn;

        // Obtén el guía asociado al evento
        $guia = $this->entityManager->getRepository('App\Entity\User')->findOneBy(['roles' => 'ROLE_GUIA']);

        if ($guia !== null) {

            $reserva->setUser($guia);
        }

        return $reserva;
    }
}
