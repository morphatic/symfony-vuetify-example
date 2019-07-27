<?php
    
    namespace App\Controller;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Component\HttpFoundation\Request;
    
    class HomeController extends AbstractController
    {
         /**
         * @Route("/")
         */
        public function index()
        {
            return $this->render('index.html.twig');
        }
    }