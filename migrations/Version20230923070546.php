<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230923070546 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE detalles_reserva RENAME INDEX idx_d0454bc58b14082 TO IDX_D0454BC515ED8D43');
        $this->addSql('ALTER TABLE reserva RENAME INDEX idx_188d2e3b8b14082 TO IDX_188D2E3B15ED8D43');
        $this->addSql('ALTER TABLE slider RENAME INDEX idx_cfc710078b14082 TO IDX_CFC7100715ED8D43');
        $this->addSql('ALTER TABLE user CHANGE token token VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE detalles_reserva RENAME INDEX idx_d0454bc515ed8d43 TO IDX_D0454BC58B14082');
        $this->addSql('ALTER TABLE reserva RENAME INDEX idx_188d2e3b15ed8d43 TO IDX_188D2E3B8B14082');
        $this->addSql('ALTER TABLE slider RENAME INDEX idx_cfc7100715ed8d43 TO IDX_CFC710078B14082');
        $this->addSql('ALTER TABLE user CHANGE token token VARCHAR(255) DEFAULT NULL');
    }
}
