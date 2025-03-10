<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="/styles/reset.css">
    <link rel="stylesheet" href="/styles/global.css">
    <link rel="stylesheet" href="/styles/components/nav.css">
    <link rel="stylesheet" href="/styles/components/hero.css">
    <link rel="stylesheet" href="/styles/components/destinos.css">
    <link rel="stylesheet" href="/styles/components/gallery-app.css">
    <link rel="stylesheet" href="/styles/components/carousel-app.css">
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="">

    <script src="/scripts/index.js" type="module" defer></script>
    <script src="/scripts/components/carousel-app.js" type="module" defer></script>
</head>

<body>

    <header id="main-nav-menu">

        <nav>
            <div class="logo-container">
                <a href="/">
                    <img src="/assets/icons/logo.png" alt="Logo Rotas Travel.">
                </a>
            </div>

            <ul class="width-default">
                <li>
                    <a href="#destinos">
                        <span>DESTINOS</span>
                    </a>
                </li>
                <li>
                    <a href="#historia">
                        <span>HISTÓRIA</span>
                    </a>
                </li>
                <li>
                    <a href="#localizacao">
                        <span>LOCALIZAÇÃO</span>
                    </a>
                </li>
                <li>
                    <a href="#contato-section">
                        <span>CONTATO</span>
                    </a>
                </li>
            </ul>

            <div class="media-container">
                <a href="http://" target="_blank">
                    <img src="/assets/icons/whatsapp.svg" alt="">
                </a>

                <a href="http://" target="_blank">
                    <img src="/assets/icons/instagram.svg" alt="">
                </a>
            </div>
        </nav>

    </header>






    <main class="site-content">
        <section id="hero" class="">

            <img src="/assets/images/atacama-pg-1.png" class="hero-bg" alt="Imagem de fundo do Atacama." />

            <!-- <div class="hero-content"> -->
            <h2>EXPLORE A AMÉRICA DO SUL<br>COM SEGURANÇA E CONFORTO GARANTIDO</h2>
            <a href="#destinos">
                <span>Arraste para baixo </span>
                <img src="/assets/icons/icone-para-baixo-pg-1.png" alt="Icone seta para baixo.">
            </a>

            <!-- </div> -->
        </section>
        <div>
            <section id="destinos" class="">

                <img src="/assets/images/montanha-fundo-pg-2.png" class="destinos-bg" alt="">

                <h2 class="width-large">CONHEÇA NOSSAS ROTAS E DESTINOS</h2>

                <div class="destinos-gallery-app-container width-default">

                    <div id="gallery-app">


                        <div id="carousel-app">
                            <div class="cards-container">
                                <!-- Cards with images and aditional contents is added here by js -->
                            </div>
                            <nav class="carousel-navigator">
                                <button>To Left</button>
                                <button>More About</button>
                                <button>To Right</button>
                            </nav>
                        </div>
                    </div>

                </div>

            </section>

            <section id="historia" class="width-default">
                <h2>HISTÓRIA DA ROTAS TRAVEL</h2>

                <div class="content-container">
                    <div class="card-container">
                        <img src="" alt="">

                        <span>VERÔNICA MATOS | CEO</span>
                    </div>

                    <div class="text-container">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur, commodi
                            nam
                            adipisci labore laudantium ipsum facere atque autem quae! Facilis aliquam nam nemo nostrum
                            possimus aliquid repellendus at ab.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur repudiandae sunt?
                            Nulla
                            doloribus, repellendus facilis omnis ducimus cumque eaque veniam, atque numquam dolores
                            similique debitis, laudantium totam sapiente qui!</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem commodi esse eligendi
                            debitis omnis quia, cupiditate eos nesciunt laudantium aliquam at cum laboriosam, officia
                            amet
                            temporibus? Nihil, doloremque doloribus?</p>

                        <span>Patagônia Argentina e Chilena</span>

                        <span>Vinhedos de Santiago, Chile</span>

                        <span>Deserto do Atacama e kalama</span>

                        <span>Salar de Uyuni, Bolívia</span>

                        <p>Com roteiros que vão do ecoturismo e aventura ao turismo culrutral e gastronômico, <br>
                            garantimos experiências completas para todos os estilos de viagem.</p>

                        <span>Lua de mel | Casal | Melhor Idade | Amigos | Aventura | Cruzeiro | Família</span>
                    </div>
                </div>
            </section>
            <section id="localizacao">

                <span>AV. GEN. FLORES DA CUNHA, 4001 - VILA BOM PRINCIPIO, CACHOEIRINHA - RS, 94950-001M</span>

                <div class="cards-container">
                    <div class="maps-container"></div>

                    <div class="img-container">
                        <img src="" alt="">
                    </div>
                </div>

            </section>

            <section class="">
                <!-- EXTRA: CONTEÚDO INDEFINIDO -->
            </section>
        </div>


    </main>

    <footer>


    </footer>


</body>

</html>