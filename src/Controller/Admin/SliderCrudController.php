<?php

namespace App\Controller\Admin;

use App\Entity\Slider;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SliderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Slider::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            ImageField::new('imagen', 'Imagen')
                ->setBasePath('uploads/images')
                ->setUploadDir('public/uploads/images/')
                ->setUploadedFileNamePattern('[slug]-[timestamp].[extension]')
                ->setFormTypeOptions([
                    'required' => false
                ]),
            TextField::new('titulo', 'Titulo'),
            ChoiceField::new('orden', 'Orden')->setChoices([
                '1' => 1,
                '2' => 2,
                '3' => 3,
                '4' => 4,
                '5' => 5
            ]),
            // ChoiceField::new('pagina', 'Pagina')->setChoices([
            //     'Torre Eiffel' => "torre",
            //     "Montmartre" => "montmartre",
            //     'Imprecindible' => "imprescindible",
            //     "Leyendas y misterios" => "leyendas"

            // ]),
            AssociationField::new('tour', 'Tour')
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\Tour',
                    'label' => 'Tour', // Cambia esto al campo correcto de Producto que quieres mostrar en el formulario
                ]),

            DateTimeField::new('fecha_registro', 'Fecha de registro')->setFormat('d/M/Y - H:m')->hideOnForm(),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $slider = new $entityFqcn;
        $slider->setFechaRegistro(new \Datetime);
        return $slider;
    }
}
