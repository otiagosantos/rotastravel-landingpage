<?php




?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotas Travel</title>

    <link rel="stylesheet" href="/styles/global.css" />
    <link rel="stylesheet" href="/styles/header.css" />
    <link rel="stylesheet" href="/styles/hero.css" />

    <script src="/scripts/global.js" defer></script>
    <script src="/scripts/header.js" defer></script>


</head>

<body>

    <header>
        <nav id="navbar">
            <a href="#hero" id="navbar-logo_container" class="icon-container">
                <img src="/assets/icons/logo.png" alt="">
            </a>
            <ul id="navbar_list">
                <li class="list-item"><a href="#">Destinos</a></li>
                <li class="list-item"><a href="#">História</a></li>
                <li class="list-item"><a href="#">Localização</a></li>
                <li class="list-item"><a href="#">Contato</a></li>

            </ul>
            <div id="navbar_social-media">
                <div class="icon-container">
                    <a href="">
                        <img src="/assets/icons/instagram.svg" alt="">
                    </a>
                </div>
                <div class="icon-container">
                    <a href="">
                        <img src="/assets/icons/whatsapp.svg" alt="">
                    </a>
                </div>
            </div>

            <div id="mobile_nav-button">
                <span></span>
            </div>
        </nav>

        <div id="mobile_nav-menu" hidden>
            <span id="">x</span>
            <ul id="mobile_nav-list">
                <li class="list-item"><a href="#">Destinos</a></li>
                <li class="list-item"><a href="#">História</a></li>
                <li class="list-item"><a href="#">Localização</a></li>
                <li class="list-item"><a href="#">Contato</a></li>

            </ul>
        </div>

    </header>

    <main>

        <section id="hero">
            <div id="cactos">
                <img src="/assets/images/cactos-pg-1.png" alt="Imagem ilustrativa de um cactos.">
            </div>
            <div id="hero_content">
                <h2 class="title">EXPLORE A AMÉRICA DO SUL<br>E VIVA ESSA EXPERIÊNCIA</h2>

            </div>
            <!-- cta = Call To Action -->
            <div id="hero_cta-btn">
                <div class="btn cta-btn">
                    <span>Arraste para baixo</span>
                    <img src="/assets/icons/icone-para-baixo-pg-1.png" />
                </div>
            </div>

            <div id="hero_bg">
                <img src="/assets/images/atacama-pg-1.png" alt="Atacama servindo como imagem de fundo.">
            </div>
        </section>


    </main>


</body>

</html>