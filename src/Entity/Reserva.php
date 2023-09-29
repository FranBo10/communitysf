<?php

namespace App\Entity;

use App\Repository\ReservaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservaRepository::class)]
class Reserva
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $estado = null;

    #[ORM\Column(length: 255)]
    private ?string $referencia = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?Tour $tour = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?Guia $guia = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?User $user = null;

    #[ORM\ManyToMany(targetEntity: DetallesReserva::class, mappedBy: 'reservas', cascade: ['persist'])]
    private Collection $detallesReservas;

    #[ORM\OneToMany(mappedBy: 'reservas', targetEntity: Evento::class, cascade: ["persist", "remove"])]
    private Collection $eventos;

    public function __construct()
    {
        $this->fecha_registro = new \DateTimeImmutable();
        $this->detallesReservas = new ArrayCollection();
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

    public function getTour(): ?Tour
    {
        return $this->tour;
    }

    public function setTour(?Tour $tour): static
    {
        $this->tour = $tour;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, DetallesReserva>
     */
    public function getDetallesReservas(): Collection
    {
        return $this->detallesReservas;
    }

    public function addDetallesReserva(DetallesReserva $detallesReserva): self
    {
        if (!$this->detallesReservas->contains($detallesReserva)) {
            $this->detallesReservas[] = $detallesReserva;
            $detallesReserva->addReserva($this);
        }

        return $this;
    }

    public function removeDetallesReserva(DetallesReserva $detallesReserva): self
    {
        if (!$this->detallesReservas->contains($detallesReserva)) {

            $detallesReserva->removeReserva($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Evento>
     */
    public function getEventos(): Collection
    {
        return $this->eventos;
    }

    public function addEvento(Evento $evento): self
    {
        if (!$this->eventos->contains($evento)) {
            $this->eventos->add($evento);
            $evento->setReservas($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): self
    {
        if ($this->eventos->removeElement($evento)) {
            // set the owning side to null (unless already changed)
            if ($evento->getReservas() === $this) {
                $evento->setReservas(null);
            }
        }

        return $this;
    }
}
