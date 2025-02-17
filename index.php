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
    <link rel="stylesheet" href="/styles/destinos.css" />
    <link rel="stylesheet" href="/styles/historia.css" />

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
                <li class="list-item"><a href="#destinos">Destinos</a></li>
                <li class="list-item"><a href="#historia">História</a></li>
                <li class="list-item"><a href="#localizacao">Localização</a></li>
                <li class="list-item"><a href="#contato">Contato</a></li>

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
                <a href="#destinos" class="btn cta-btn">
                    <span>Arraste para baixo</span>
                    <img src="/assets/icons/icone-para-baixo-pg-1.png" />
                </a>
            </div>

            <div id="hero_bg">
                <img src="/assets/images/atacama-pg-1.png" alt="Atacama servindo como imagem de fundo.">
            </div>
        </section>
        <section id="destinos">
            <div id="destinos_bg">
                <img src="/assets/images/montanha-fundo-pg-2.png" alt="Montas ao fundo.">
            </div>

            <div id="destinos_title">
                <h3 class="title">Conheça nosssas rotas e destinos</h3>
            </div>
            <div id="destinos_content" class="content-width">
                <div></div>
                <!-- JS INJECTION -->
            </div>
        </section>
        <section id="historia">
            <div id="historia_title">
                <h3 class="title">História da Rotas Travel</h3>
            </div>
            <div id="historia_content" class="content-width">
                <div id="historia_left-side-content">
                    <figure class="card">
                        <img src="/assets/images/foto-veronica-pg 3.png" alt="">

                        <figcaption>Verônica Matos | CEO</figcaption>
                    </figure>
                </div>
                <div id="historia_right-side-content">

                    <div class="historia_quote">
                        <blockquote>
                            <p><cite>VIAJAR É TROCAR A ROUPA DA ALMA<cite></p>
                        </blockquote>
                        <p>—Mario Quintana</p>
                    </div>

                    <p>Sempre que eu viajava, eu queria capturar rudo na lente da minha câmera, mas a cada clique percebia e sentia vibrar meu desejo que mais pessoas tinha que ver o mesmo que eu estava vendo e sentindo, porque não conseguia guardar exatamente como era, que só tirar fotos e fazer vídeos não seria o suficiente para as pessoas realmente viverem aquele momento naquele lugar que eu também estava vivenciando.</p>

                    <p>A Rotas Travel nasceu do desejo de oferecer experiências únicas e memoráveis, conectando pessoas aos encantos e riquezas naturais, principalmente na América do Sul que é a minha paixão.</p>

                    <p>Nos tornamos uma agência de turismo com foco em explorar cada detalhe que esse continente fascinante tem para nos oferecer.</p>

                    <p>Nosso compromisso juntamente com nossas experiências nos destinos é garantir que cada viagem seja mais que apenas uma visita e destinos turísticos, mas sim, uma imersão autêntica e segura. Cuidamos de tudo, desde o planejamento até o suporte durante toda a jornada, para que nossos viajantes possam desfrutar plenamente da experiência com todo o compromisso que podemos oeferecer e tranquilidade para os nossos biajantes durante todo o percurso da viagem.</p>

                    <span class="bold uppercase">Experiências:</span>

                    <p>Somos especialistas em destinos icônicos na América do Sul, oferecendo viagens contemplativas e cheias de aventura.</p>

                    <!-- <ul id="historia_experiencias-list">
                        <li>Patatgônia Argentina e Chilena</li>

                        <li>Vinhedos de Santiago, Chile</li>

                        <li>Deserto do Atacama e Kalama</li>

                        <li>Salar de Uyuni, Bolívia</li>
                    </ul> -->

                    <!-- <p>Com roteiros que vão do ecoturismo e aventura ao turismo cultural e gastronômico, <br> garantimos experiências completas para todos os estilos de viagem.</p>

                    <span>Lua de mel | Casal | Melhor Idade | Amigos | Aventura | Cruzeiro | Família</span> -->
                </div>
            </div>
            <div id="historia_bg">
                <img src="/assets/images/logo-com-pouca-opacidade-pg 3.png" alt="">
            </div>
        </section>

    </main>


</body>

</html>