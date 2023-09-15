<?php

namespace App\Entity;

use App\Repository\TourRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TourRepository::class)]
class Tour
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titulo = null;

    #[ORM\Column(length: 255)]
    private ?string $imagen = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descripcion_larga = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descripcion_corta = null;

    #[ORM\Column]
    private ?float $precio = null;

    #[ORM\Column]
    private ?bool $estado = null;

    #[ORM\Column]
    private ?int $stock = null;

    #[ORM\OneToMany(mappedBy: 'tours', targetEntity: Reserva::class)]
    private Collection $reservas;

    #[ORM\OneToMany(mappedBy: 'tours', targetEntity: Slider::class)]
    private Collection $sliders;

    public function __construct()
    {
        $this->reservas = new ArrayCollection();
    }

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

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(string $imagen): static
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getDescripcionLarga(): ?string
    {
        return $this->descripcion_larga;
    }

    public function setDescripcionLarga(string $descripcion_larga): static
    {
        $this->descripcion_larga = $descripcion_larga;

        return $this;
    }

    public function getDescripcionCorta(): ?string
    {
        return $this->descripcion_corta;
    }

    public function setDescripcionCorta(string $descripcion_corta): static
    {
        $this->descripcion_corta = $descripcion_corta;

        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(float $precio): static
    {
        $this->precio = $precio;

        return $this;
    }

    public function isEstado(): ?bool
    {
        return $this->estado;
    }

    public function setEstado(bool $estado): static
    {
        $this->estado = $estado;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }

    /**
     * @return Collection<int, Reserva>
     */
    public function getReservas(): Collection
    {
        return $this->reservas;
    }

    public function addReserva(Reserva $reserva): static
    {
        if (!$this->reservas->contains($reserva)) {
            $this->reservas->add($reserva);
            $reserva->setTours($this);
        }

        return $this;
    }

    public function removeReserva(Reserva $reserva): static
    {
        if ($this->reservas->removeElement($reserva)) {
            // set the owning side to null (unless already changed)
            if ($reserva->getTours() === $this) {
                $reserva->setTours(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Slider>
     */
    public function getSliders(): Collection
    {
        return $this->sliders;
    }

    public function addSlider(Slider $slider): static
    {
        if (!$this->sliders->contains($slider)) {
            $this->sliders->add($slider);
            $slider->setTour($this);
        }

        return $this;
    }

    public function removeSlider(Slider $slider): static
    {
        if ($this->sliders->removeElement($slider)) {
            // set the owning side to null (unless already changed)
            if ($slider->getTour() === $this) {
                $slider->setTour(null);
            }
        }

        return $this;
    }
}
