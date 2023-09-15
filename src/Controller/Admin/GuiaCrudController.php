<?php

namespace App\Controller\Admin;

use App\Entity\Guia;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class GuiaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Guia::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
