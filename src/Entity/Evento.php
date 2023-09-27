<?php

namespace App\Entity;

use App\Repository\EventoRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventoRepository::class)]
class Evento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $titulo = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $inicio = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fin = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_evento = null;

    #[ORM\Column]
    private ?int $cantidad = 0;

    #[ORM\ManyToOne(inversedBy: 'eventos')]
    private ?Reserva $reservas = null;

    #[ORM\ManyToOne(inversedBy: 'eventos')]
    private ?Tour $tour = null;

    #[ORM\ManyToOne(inversedBy: 'eventos')]
    private ?DetallesReserva $detallesReserva = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(string $titulo): static
    {
        $this->titulo = $titulo;

        return $this;
    }

    public function getInicio(): ?\DateTimeInterface
    {
        return $this->inicio;
    }

    public function setInicio(\DateTimeInterface $inicio): static
    {
        $this->inicio = $inicio;

        return $this;
    }

    public function getFin(): ?\DateTimeInterface
    {
        return $this->fin;
    }

    public function setFin(\DateTimeInterface $fin): static
    {
        $this->fin = $fin;

        return $this;
    }

    public function getFechaEvento(): ?\DateTimeInterface
    {
        return $this->fecha_evento;
    }

    public function setFechaEvento(\DateTimeInterface $fecha_evento): static
    {
        $this->fecha_evento = $fecha_evento;

        return $this;
    }

    public function getCantidad(): ?int
    {
        return $this->cantidad;
    }

    public function setCantidad(int $cantidad): static
    {
        $this->cantidad = $cantidad;

        return $this;
    }

    public function getReservas(): ?Reserva
    {
        return $this->reservas;
    }

    public function setReservas(?Reserva $reservas): static
    {
        $this->reservas = $reservas;

        return $this;
    }

    public function getTour(): ?Tour
    {
        return $this->tour;
    }

    public function setTour(?Tour $tour): static
    {
        $this->tour = $tour;

        return $this;
    }

    public function getDetallesReserva(): ?DetallesReserva
    {
        return $this->detallesReserva;
    }

    public function setDetallesReserva(?DetallesReserva $detallesReserva): static
    {
        $this->detallesReserva = $detallesReserva;

        return $this;
    }
}
