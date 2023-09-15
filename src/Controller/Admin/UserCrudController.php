<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('email', 'E-Mail'),
            TextField::new('password', 'Contraseña')->setFormType(PasswordType::class)->onlyWhenCreating(),
            ChoiceField::new('roles', 'Rol')->setChoices([
                'Usuario'  => 'ROLE_USER',
                'Admin' => 'ROLE_ADMIN',
                'Guia' => 'ROLE_GUIA',
            ])->setTemplatePath('admin/field/roles.html.twig')->allowMultipleChoices(),
            DateTimeField::new('fecha_registro', 'Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),

        ];
    }
}
