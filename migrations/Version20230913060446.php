<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230913060446 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cliente (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(50) NOT NULL, apellidos VARCHAR(60) NOT NULL, pais VARCHAR(50) NOT NULL, telefono VARCHAR(50) NOT NULL, avatar VARCHAR(255) NOT NULL, fecha_registro DATETIME NOT NULL, is_verified TINYINT(1) NOT NULL, token VARCHAR(255) NOT NULL, token_life_time DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE guia (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(50) NOT NULL, apellidos VARCHAR(70) NOT NULL, direccion VARCHAR(255) NOT NULL, telefono VARCHAR(35) NOT NULL, avatar VARCHAR(255) NOT NULL, fecha_registro DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reserva (id INT AUTO_INCREMENT NOT NULL, tours_id INT DEFAULT NULL, guia_id INT DEFAULT NULL, cantidad_total INT NOT NULL, cantidad_adultos INT NOT NULL, cantidad_kids INT NOT NULL, total_reserva DOUBLE PRECISION NOT NULL, estado VARCHAR(100) NOT NULL, referencia VARCHAR(255) NOT NULL, fecha_registro DATETIME NOT NULL, INDEX IDX_188D2E3B8B14082 (tours_id), INDEX IDX_188D2E3B62AA81F (guia_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE slider (id INT AUTO_INCREMENT NOT NULL, tours_id INT DEFAULT NULL, imagen VARCHAR(255) NOT NULL, orden INT NOT NULL, plantilla VARCHAR(255) NOT NULL, fecha_registro DATETIME NOT NULL, INDEX IDX_CFC710078B14082 (tours_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tour (id INT AUTO_INCREMENT NOT NULL, titulo VARCHAR(255) NOT NULL, imagen VARCHAR(255) NOT NULL, descripcion_larga LONGTEXT NOT NULL, descripcion_corta LONGTEXT NOT NULL, precio DOUBLE PRECISION NOT NULL, estado TINYINT(1) NOT NULL, stock INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE reserva ADD CONSTRAINT FK_188D2E3B8B14082 FOREIGN KEY (tours_id) REFERENCES tour (id)');
        $this->addSql('ALTER TABLE reserva ADD CONSTRAINT FK_188D2E3B62AA81F FOREIGN KEY (guia_id) REFERENCES guia (id)');
        $this->addSql('ALTER TABLE slider ADD CONSTRAINT FK_CFC710078B14082 FOREIGN KEY (tours_id) REFERENCES tour (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reserva DROP FOREIGN KEY FK_188D2E3B8B14082');
        $this->addSql('ALTER TABLE reserva DROP FOREIGN KEY FK_188D2E3B62AA81F');
        $this->addSql('ALTER TABLE slider DROP FOREIGN KEY FK_CFC710078B14082');
        $this->addSql('DROP TABLE cliente');
        $this->addSql('DROP TABLE guia');
        $this->addSql('DROP TABLE reserva');
        $this->addSql('DROP TABLE slider');
        $this->addSql('DROP TABLE tour');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
