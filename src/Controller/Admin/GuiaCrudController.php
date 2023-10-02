<?php

namespace App\Controller\Admin;

use App\Entity\Guia;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CountryField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TelephoneField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class GuiaCrudController extends AbstractCrudController
{
    private $entityManager;

    // Inyecta el EntityManager a través del constructor
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    public static function getEntityFqcn(): string
    {
        return Guia::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $usuarios = $this->entityManager->getRepository('App\Entity\User')->findOneBy(['roles' => 'ROLE_GUIA']);
        $guiasField = TextField::new('usuarios', 'Nombre de Usuario');

        // Configurar el campo 'usuarios' para que sea visible solo en la vista de índice.
        if ($pageName == Crud::PAGE_INDEX) {
            return [
                IdField::new('id')->hideOnForm(),
                $guiasField,
                // Otros campos aquí...
            ];
        } else {
            // Configurar los campos para otras páginas (formulario de edición, etc.).

            return [
                IdField::new('id')->hideOnForm(),
                TextField::new('Email', 'E-Mail'),
                TextField::new('Nombre', 'Nombre'),
                TextField::new('Apellidos', 'Apellidos'),
                TextField::new('direccion', 'Direccion'),
                TelephoneField::new('telefono', 'Teléfono'),
                CountryField::new('avatar', 'Avatar'),
                DateTimeField::new('fecha_registro', 'Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),

            ];
        }
    }

    public function createEntity(string $entityFqcn)
    {
        $guia = new $entityFqcn;

        $guia->setFechaRegistro(new \DateTime);

        // Obtén el guía asociado al evento
        $user = $this->entityManager->getRepository('App\Entity\User')->findOneBy(['roles' => 'ROLE_GUIA']);

        if ($user !== null) {

            $guia->setUser($user);
        }

        return $guia;
    }
}
