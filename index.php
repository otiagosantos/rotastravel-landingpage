<?php
$uri = $_SERVER["REQUEST_URI"];

$activePopup = false;

if($uri == "/boas-vindas") {
    $activePopup = true;
}

// if ($uri != "/") {
//     $page = str_replace("/", "", $uri . ".php");

//     if (!include_once($page)) {
//         include_once("404.php");
//     }
//     exit;
// }

?>


<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Explore a América do Sul e viva essa experiência.">
    <meta name="keywords" content="Rotas Travel, Rotas, Travel, Viagem, Destinos, América do Sul, América, Verônica Matos, Bolívia, Argentina, Chile, Patagônia, Brasil" >
    <meta name="author" content="Verônica Matos" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Rotas Travel</title>

    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/header.css" />
    <link rel="stylesheet" href="styles/hero.css" />
    <link rel="stylesheet" href="styles/destinos.css" />
    <link rel="stylesheet" href="styles/destinos-gallery.css" />
    <link rel="stylesheet" href="styles/historia.css" />
    <link rel="stylesheet" href="styles/localizacao.css" />
    <link rel="stylesheet" href="styles/contato.css" />
    <link rel="stylesheet" href="styles/footer.css" />

    <link rel="stylesheet" href="styles/popup.css" />

    <script src="scripts/global.js" defer></script>
    <script src="scripts/header.js" defer></script>
    <script src="scripts/destinos-gallery.js" defer></script>


</head>

<body>
    <h1>Rotas Travel</h1>
    <?php if($activePopup) : ?>

        <!-- <div id="wellcome-popup" class="active">
            <h2 class="title">Seja Muito Bem Vindo à Rotas Travel!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae. Nihil provident, architecto perferendis aliquid repellat minus praesentium, optio ipsum atque consequuntur vel consequatur! Facilis placeat at a autem? Nobis.</p>

            <button id="close-popup">Ok, quero conhecer mais!</button>
        </div> -->

    <?php endif ?>
    <header>
        <nav id="navbar">
            <a href="#hero" id="navbar-logo_container" class="icon-container">
                <img src="assets/icons/logo.png" alt="Logo Rotas Travel">
            </a>
            <ul id="navbar_list">
                <li class="list-item"><a href="#destinos">Destinos</a></li>
                <li class="list-item"><a href="#historia">História</a></li>
                <li class="list-item"><a href="#localizacao">Localização</a></li>
                <li class="list-item"><a href="#contato">Contato</a></li>

            </ul>
            <div id="navbar_social-media">
                <div class="icon-container">
                    <a href="https://www.instagram.com/rotas.travel/" target="_blank">
                        <img src="assets/icons/instagram.svg" alt="Link instagram">
                    </a>
                </div>
                <div class="icon-container">
                    <a href="https://api.whatsapp.com/send/?phone=551131630050&text&type=phone_number&app_absent=0" target="_blank">
                        <img src="assets/icons/whatsapp.svg" alt="Link Whatsapp">
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
                <img src="assets/images/cactos-pg-1.png" alt="Imagem ilustrativa de um cactos.">
            </div>
            <div id="hero_content">
                <h2 class="title">EXPLORE A AMÉRICA DO SUL<br>E VIVA ESSA EXPERIÊNCIA</h2>

            </div>
            <!-- cta = Call To Action -->
            <div id="hero_cta-btn">
                <a href="#destinos" class="btn cta-btn">
                    <span>Arraste para baixo</span>
                    <img src="assets/icons/icone-para-baixo-pg-1.png" />
                </a>
            </div>

            <div id="hero_bg">
                <img src="assets/images/atacama-pg-1.png" alt="Atacama servindo como imagem de fundo.">
            </div>
        </section>
        <section id="destinos">
            <div id="destinos_bg">
                <img src="assets/images/montanha-fundo-pg-2.png" alt="Montas ao fundo.">
            </div>

            <div id="destinos_title">
                <h3>Conheça nosssas rotas e destinos</h3>
            </div>
            <div id="destinos_content" class="content-width">
                <div id="destinos_gallery-app" class="content-width">
                    <ul id="gallery-app_card-list">
                        <li>
                            <span>Bolívia</span>
                            <img src="assets/cards/bolivia.png" alt="Bolívia">
                        </li>
                        <li>
                            <span>Chile</span>
                            <img src="assets/cards/chile.png" alt="Chile">
                        </li>
                        <li>
                            <span>Patagônia Argentina</span>
                            <img src="assets/cards/patagonia_argentina.png" alt="Patagônia Argentina">
                        </li>
                        <li>
                            <span>Patagônia Chilena</span>
                            <img src="assets/cards/patagonia_chilena.png" alt="Patagônia Chilena">
                        </li>
                    </ul>
                    <div id="gallery-app_navmenu">
                        <button class="btn">
                           <img src="assets/icons/seta-pg-2.png" alt="Avança para Esquerda"> 
                        </button>
                        <div></div>
                        <button class="btn">
                            <img src="assets/icons/seta-pg-2.png" alt="Avança para Direita.">
                        </button>
                    </div>
                </div>

            </div>
        </section>
        <section id="historia">
            <div id="historia_title">
                <h3 class="title">História da Rotas Travel</h3>
            </div>
            <div id="historia_content" class="content-width">
                <div id="historia_left-side-content">
                    <figure class="card">
                        <img src="assets/images/veronica.png" alt="Foto Verônica Matos - CEO Rotas Travel.">

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
                <img src="assets/images/logo-com-pouca-opacidade-pg 3.png" alt="Logo Rotas Travel de fundo.">
            </div>
        </section>
        <section id="localizacao">
            <div id="localizacao_bg">
                <img src="assets/images/machupichu-pg-4.png" alt="Imagem ilustrativa de Machu Picchu">
            </div>
            <div id="localizacao_title">
                <h3 class="title">Localização</h3>
            </div>
            <address class="content-width">
                Alameda Santos 1165
                Paulista II
                VIP OFFICE 
                São Paulo 
            </address>
            <div id="localizacao_content" class="content-width">
                <div id="localizacao_left-side-content">
                    <iframe
                        title="Localização Rotas Travel - Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.8521662026182!2d-46.65400197313696!3d-23.565338171677297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c636f78fb7%3A0xc8c4fd5b1a995474!2sAlameda%20Santos%2C%201165%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001419-000!5e0!3m2!1spt-BR!2sbr!4v1740075180220!5m2!1spt-BR!2sbr"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div id="localizacao_right-side-content">
                    <img src="assets/images/vip.png" alt="Imagem da fachada da Rotas Travel.">
                </div>
            </div>
        </section>
        <section id="contato">
            <div id="contato_bg">
                <img src="assets/images/fundo_ultima_pg.png" alt="Imagem e montanhas ao fundo.">
            </div>
            <div id="contato_content">
                <div></div>
                <span id="contato_cta" class="uppercase bold">Não perca a oportunidade de explorar a América do Sul</span>
 target="_blank"
                <a href="https://api.whatsapp.com/send/?phone=551131630050&text&type=phone_number&app_absent=0" class="btn cta-btn" target="_blank">
                    Clique aqui
                </a>
            </div>
        </section>
    </main>
    <footer>
        Rotas Travel - 2025
    </footer>

</body>

</html>