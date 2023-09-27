<?php

namespace App\Controller\Admin;

use App\Entity\Tour;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TourCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Tour::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TimeField::new('hora_inicio', 'Inicio')->setFormat('short'),
            TimeField::new('hora_fin', 'Fin')->setFormat('short'),
            TextField::new('titulo', 'Titulo'),
            TextField::new('descripcion_corta', 'Descripcion corta')->onlyOnForms(),
            TextEditorField::new('descripcion_larga', 'Descripcion larga')->onlyOnForms(),
            ImageField::new('imagen')->setUploadDir('public/uploads/images/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenUpdating()->setFormTypeOptions([
                'required' => false,
            ]),
            ImageField::new('imagen')->setUploadDir('public/uploads/images/')->setUploadedFileNamePattern('[timestamp]-[slug]-[contenthash].[extension]')->onlyWhenCreating(),
            ImageField::new('imagen')->setBasePath('uploads/images/')->hideOnForm(),
            MoneyField::new('precio', 'Precio')->setCurrency('EUR'),
            IntegerField::new('stock'),
            BooleanField::new('estado', 'Activo'),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $tour = new $entityFqcn;
        return $tour;
    }
}
