<?php

namespace App\Controller\Admin;

use App\Entity\Guia;
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
    public static function getEntityFqcn(): string
    {
        return Guia::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('Nombre', 'Nombre'),
            TextField::new('Apellidos', 'Apellidos'),
            TextField::new('email', 'E-Mail'),
            TextField::new('password', 'Contraseña')->setFormType(PasswordType::class)->onlyWhenCreating(),
            TelephoneField::new('telefono', 'Teléfono'),
            CountryField::new('pais', 'Pais'),
            ChoiceField::new('roles', 'Rol')
            ->setChoices([
                'Guía' => 'ROLE_GUIA',
            ])
            ->onlyOnForms(),
            DateTimeField::new('fecha_registro', 'Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),

        ];
    }
}
