<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230929144947 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE detalles_reserva DROP FOREIGN KEY FK_D0454BC567B3B43D');
        $this->addSql('DROP INDEX IDX_D0454BC567B3B43D ON detalles_reserva');
        $this->addSql('ALTER TABLE detalles_reserva CHANGE users_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE detalles_reserva ADD CONSTRAINT FK_D0454BC5A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D0454BC5A76ED395 ON detalles_reserva (user_id)');
        $this->addSql('ALTER TABLE user CHANGE token token VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE detalles_reserva DROP FOREIGN KEY FK_D0454BC5A76ED395');
        $this->addSql('DROP INDEX IDX_D0454BC5A76ED395 ON detalles_reserva');
        $this->addSql('ALTER TABLE detalles_reserva CHANGE user_id users_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE detalles_reserva ADD CONSTRAINT FK_D0454BC567B3B43D FOREIGN KEY (users_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D0454BC567B3B43D ON detalles_reserva (users_id)');
        $this->addSql('ALTER TABLE user CHANGE token token VARCHAR(255) DEFAULT NULL');
    }
}
