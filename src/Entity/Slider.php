<?php

namespace App\Entity;

use App\Repository\SliderRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SliderRepository::class)]
class Slider
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $imagen = null;

    #[ORM\Column]
    private ?int $orden = null;

    #[ORM\Column(length: 255)]
    private ?string $plantilla = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\Column(length: 255)]
    private ?string $titulo = null;
    
    #[ORM\ManyToOne(inversedBy: 'sliders')]
    private ?Tour $tours = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(string $imagen): static
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getOrden(): ?int
    {
        return $this->orden;
    }

    public function setOrden(int $orden): static
    {
        $this->orden = $orden;

        return $this;
    }

    public function getPlantilla(): ?string
    {
        return $this->plantilla;
    }

    public function setPlantilla(string $plantilla): static
    {
        $this->plantilla = $plantilla;

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

    public function getTour(): ?Tour
    {
        return $this->tours;
    }

    public function setTour(?Tour $tours): static
    {
        $this->tours = $tours;

        return $this;
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
}
