<?php

namespace App\Entity;

use App\Repository\DetallesReservaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DetallesReservaRepository::class)]
class DetallesReserva
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $cantidad = 0;

    #[ORM\Column]
    private ?int $total_reserva = null;

    #[ORM\Column]
    private ?int $cantidad_adultos = 1;

    #[ORM\Column(nullable: true)]
    private ?int $cantidad_kids = 0;

    #[ORM\ManyToOne(inversedBy: 'detallesReserva', cascade: ['persist'])]
    private ?Tour $tour = null;

    #[ORM\ManyToOne(inversedBy: 'detallesReserva')]
    private ?User $user = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_evento = null;

    #[ORM\ManyToMany(targetEntity: Reserva::class, inversedBy: 'detallesReservas')]
    #[ORM\JoinTable(name: 'detalles_reserva_reserva')]
    private Collection $reservas;

    #[ORM\OneToMany(mappedBy: 'detallesReserva', targetEntity: Evento::class)]
    private Collection $eventos;

    public function __construct()
    {
        $this->fecha_evento = new \DateTime();
        $this->reservas = new ArrayCollection();
        $this->eventos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
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

    public function getTotalReserva(): ?int
    {
        return $this->total_reserva;
    }

    public function setTotalReserva(int $totalReserva): static
    {
        $this->total_reserva = $totalReserva;

        return $this;
    }

    /**
     * @return Collection<int, reserva>
     */
    public function getReservas(): Collection
    {
        return $this->reservas;
    }

    public function addReserva(Reserva $reserva): self
    {
        if (!$this->reservas->contains($reserva)) {
            $this->reservas[] = $reserva;
        }

        return $this;
    }

    public function removeReserva(Reserva $reserva): self
    {
        $this->reservas->removeElement($reserva);

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

    public function setCantidadKids(?int $cantidad_kids): static
    {
        $this->cantidad_kids = $cantidad_kids;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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

    /**
     * @return Collection<int, Evento>
     */
    public function getEventos(): Collection
    {
        return $this->eventos;
    }

    public function addEvento(Evento $evento): static
    {
        if (!$this->eventos->contains($evento)) {
            $this->eventos->add($evento);
            $evento->setDetallesReserva($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): static
    {
        if ($this->eventos->removeElement($evento)) {
            // set the owning side to null (unless already changed)
            if ($evento->getDetallesReserva() === $this) {
                $evento->setDetallesReserva(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->fecha_evento->format('Y-m-d');
    }
}
