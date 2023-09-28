<?php

namespace App\Controller\Admin;

use App\Entity\Evento;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class EventoCrudController extends AbstractCrudController
{
    // use Trait\SoloLecturaTrait;

    public static function getEntityFqcn(): string
    {
        return Evento::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titulo', 'Titulo'),
            AssociationField::new('tour', 'Tour')
                ->setRequired(true)
                ->autocomplete()
                ->setFormTypeOptions([
                    'class' => 'App\Entity\Tour',
                    'label' => 'Tour',
                ]),
            // AssociationField::new('reservas', 'Reserva')->setFormTypeOptions([
            //     'class' => 'App\Entity\Reserva',
            //     'label' => 'Id_Reserva',
            // ])->hideOnForm(),
            // AssociationField::new('detallesReserva', 'DetallesReserva')->setFormTypeOptions([
            //     'class' => 'App\Entity\DetallesReserva',
            //     'label' => 'Fechas reservas',
            // ]),
            DateTimeField::new('inicio', 'Fecha de inicio')->setFormat('d/M/Y'),
            DateTimeField::new('fin', 'Fecha fin')->setFormat('d/M/Y'),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $evento = new $entityFqcn;

        // $reserva = $evento->getReservas();
        // $detallesReserva = $evento->getDetallesReserva();

        // Obtén el tour asociado al evento
        $tour = $evento->getTour();

        // Verifica si hay un tour y establece su título como el título del evento
        if ($tour !== null 
        // && $detallesReserva !== null
        ) {
            $evento->setTitulo($tour->getTitulo());
                // ->setId($reserva->getId())
                // ->setDescripcion($tour->getDescripcionCorta())
                // ->setInicio($tour->getHoraInicio()->format('H:i'))
                // ->setFin($tour->getHoraFin()->format('H:i'))
                // ->setAllDay($detallesReserva->getFechaEvento('Y-m-d'));
        }

        // Puedes establecer otras propiedades del evento aquí si es necesario
        // $evento->setDescripcion($tour->getTitulo());

        return $evento;
    }
}
