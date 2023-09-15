<?php

namespace App\Entity;

use App\Repository\ReservaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservaRepository::class)]
class Reserva
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $cantidad_total = null;

    #[ORM\Column]
    private ?int $cantidad_adultos = null;

    #[ORM\Column]
    private ?int $cantidad_kids = null;

    #[ORM\Column]
    private ?float $total_reserva = null;

    #[ORM\Column(length: 100)]
    private ?string $estado = null;

    #[ORM\Column(length: 255)]
    private ?string $referencia = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?Tour $tours = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?Guia $guia = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCantidadTotal(): ?int
    {
        return $this->cantidad_total;
    }

    public function setCantidadTotal(int $cantidad_total): static
    {
        $this->cantidad_total = $cantidad_total;

        return $this;
    }

    public function getCantidadAdultos(): ?int
    {
        return $this->cantidad_adultos;
    }

    public function setCantidadAdultos(int $cantidad_adultos): static
    {
        $this->cantidad_adultos = $cantidad_adultos;

        return $this;
    }

    public function getCantidadKids(): ?int
    {
        return $this->cantidad_kids;
    }

    public function setCantidadKids(int $cantidad_kids): static
    {
        $this->cantidad_kids = $cantidad_kids;

        return $this;
    }

    public function getTotalReserva(): ?float
    {
        return $this->total_reserva;
    }

    public function setTotalReserva(float $total_reserva): static
    {
        $this->total_reserva = $total_reserva;

        return $this;
    }

    public function getEstado(): ?string
    {
        return $this->estado;
    }

    public function setEstado(string $estado): static
    {
        $this->estado = $estado;

        return $this;
    }

    public function getReferencia(): ?string
    {
        return $this->referencia;
    }

    public function setReferencia(string $referencia): static
    {
        $this->referencia = $referencia;

        return $this;
    }

    public function getFechaRegistro(): ?\DateTimeInterface
    {
        return $this->fecha_registro;
    }

    public function setFechaRegistro(\DateTimeInterface $fecha_registro): static
    {
        $this->fecha_registro = $fecha_registro;

        return $this;
    }

    public function getTours(): ?Tour
    {
        return $this->tours;
    }

    public function setTours(?Tour $tours): static
    {
        $this->tours = $tours;

        return $this;
    }

    public function getGuia(): ?Guia
    {
        return $this->guia;
    }

    public function setGuia(?Guia $guia): static
    {
        $this->guia = $guia;

        return $this;
    }
}
