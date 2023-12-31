<?php

namespace App\Entity;

use DateInterval;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 50)]
    private ?string $nombre = null;

    #[ORM\Column(length: 80)]
    private ?string $apellidos = null;

    #[ORM\Column(length: 50)]
    private ?string $pais = null;

    #[ORM\Column(length: 50)]
    private ?string $telefono = null;

    #[ORM\Column(length: 255)]
    private ?string $avatar = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fecha_registro = null;

    #[ORM\Column]
    private ?bool $isVerified = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $token = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $token_life_time = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Reserva::class)]
    private Collection $reservas;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Guia::class)]
    private Collection $guias;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: DetallesReserva::class)]
    private Collection $detallesReserva;


    public function __construct()
    {
        $this->fecha_registro = new \DateTime('now');
        $this->isVerified = false;
        //P1D le decimos que el tiempo de validacion del token sera de 1 dia
        $this->token_life_time = (new \DateTime('now'))->add(new DateInterval("P1D"));
        $this->reservas = new ArrayCollection();
        $this->detallesReserva = new ArrayCollection();
        $this->guias = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): static
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getApellidos(): ?string
    {
        return $this->apellidos;
    }

    public function setApellidos(string $apellidos): static
    {
        $this->apellidos = $apellidos;

        return $this;
    }

    public function getPais(): ?string
    {
        return $this->pais;
    }

    public function setPais(string $pais): static
    {
        $this->pais = $pais;

        return $this;
    }

    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(string $telefono): static
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(string $avatar): static
    {
        $this->avatar = $avatar;

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

    public function isVerified(): ?bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): static
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(?string $token): static
    {
        $this->token = $token;

        return $this;
    }

    public function getTokenLifeTime(): ?\DateTimeInterface
    {
        return $this->token_life_time;
    }

    public function setTokenLifeTime(\DateTimeInterface $token_life_time): static
    {
        $this->token_life_time = $token_life_time;

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
            $reserva->setUser($this);
        }

        return $this;
    }

    public function removeReserva(Reserva $reserva): static
    {
        if ($this->reservas->removeElement($reserva)) {
            // set the owning side to null (unless already changed)
            if ($reserva->getUser() === $this) {
                $reserva->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Guia>
     */
    public function getGuias(): Collection
    {
        return $this->guias;
    }

    public function addGuias(Guia $guia): static
    {
        if (!$this->guias->contains($guia)) {
            $this->guias->add($guia);
            $guia->setUser($this);
        }

        return $this;
    }

    public function removeGuias(Guia $guia): static
    {
        if ($this->guias->removeElement($guia)) {
            // set the owning side to null (unless already changed)
            if ($guia->getUser() === $this) {
                $guia->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, DetallesReserva>
     */
    public function getDetallesReserva(): Collection
    {
        return $this->detallesReserva;
    }

    public function addDetallesReserva(DetallesReserva $detallesReserva): static
    {
        if (!$this->detallesReserva->contains($detallesReserva)) {
            $this->detallesReserva->add($detallesReserva);
            $detallesReserva->setUser($this);
        }

        return $this;
    }

    public function removeDetallesReserva(DetallesReserva $detallesReserva): static
    {
        if ($this->detallesReserva->removeElement($detallesReserva)) {
            // set the owning side to null (unless already changed)
            if ($detallesReserva->getUser() === $this) {
                $detallesReserva->setUser(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->nombre . " " . $this->apellidos;
    }
}
