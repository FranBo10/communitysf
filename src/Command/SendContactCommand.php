<?php

namespace App\Command;

use App\Service\ContactoService;
use Symfony\Component\Mime\Email;
use App\Repository\UserRepository;
use Symfony\Component\Mime\Address;
use App\Repository\ContactoRepository;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class SendContactCommand extends Command
{
    private $contactRepository;
    private $mailer;
    private $cs;
    private $usuarioRepository;
    protected static $defaultName = 'app:send-contact';

    public function __construct(ContactoRepository $contactRepository, MailerInterface $mailer, ContactoService $cs, UserRepository $usuarioRepository)
    {
        $this->contactRepository = $contactRepository;
        $this->mailer = $mailer;
        $this->cs = $cs;
        $this->usuarioRepository = $usuarioRepository;
        parent::__construct();
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $toSend = $this->contactRepository->findBy(['isSend' => false]);
        $client = $this->usuarioRepository->getCliente();
        $address = new Address($this->usuarioRepository->getCliente()->getEmail(), $this->usuarioRepository->getCliente()->getNombre());
        if ($client) {
            $address = new Address($client->getEmail(), $client->getNombre());
        } else {
            // Handle the case when the client is null (e.g., provide a default email and name)
            $address = new Address('default@example.com', 'Default Name');
        }
        foreach ($toSend as $mail) {
            $email = (new Email())
                ->from($mail->getEmail())
                ->to($address)
                ->subject('Nuevo mensaje de ' . $mail->getNombre())
                ->text($mail->getMensaje());

            $this->mailer->send($email);

            $this->cs->isSend($mail);
        }
        return Command::SUCCESS;
    }
}
