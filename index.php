<?php
// echo $_SERVER["REQUEST_URI"];

$uri = $_SERVER["REQUEST_URI"];
if ($uri == "/paralax") {
	include_once "paralax-test.php";
	exit;
} else if ($uri == "/carousel") {
	include_once "carousel-test.php";
	exit;
}

?>
<!DOCTTYPE html>
	<html lang="pt-br">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Rotas Travel</title>

		<link rel="stylesheet" href="/styles/global.css">


		<script src="/scripts/index.js" type="module" defer></script>

	</head>

	<body>
		<nav id="main-navigator">
			<div id="logo-container">
				<img src="/assets/icons/" alt="" class="logo">
			</div>
			<ul>
				<li>
					<a href="#destinos">
						Destinos
					</a>
				</li>
				<li>
					<a href="#historia">
						História
					</a>
				</li>
				<li>
					<a href="#localizacao">
						Localização
					</a>
				</li>
				<li>
					<a href="#contato">
						Contato
					</a>
				</li>
			</ul>
			<div id="social-container">
				<a href="whatsapp.com">
					<img src="/assets/icons/whatsapp.svg" alt="Icone Clicável do Whatsapp.">
				</a>
				<a href="instagram.com">
					<img src="/assets/icons/instagram.svg" alt="Icone Clicável do Instagram.">
				</a>
			</div>
		</nav>
		<header>
			<section id="hero">
				<div id="hero-title" class="title-container">
					<h2>EXPLORE A AMÉRICA DO SUL E VIVA ESSA EXPERIÊNCIA</h2>
				</div>
				<div id="hero-cactu" class="img-container">
					<img src="/assets/images/cactu-pg-1.png" alt="">
				</div>
				<div id="hero-bg" class="img-container">
					<img src="/assets/images/atacama-pg-1.png" alt="">
				</div>
			</section>
		</header>
		<main>
			<section id="historia"></section>
			<section id="localização"></section>
			<section id="contato"></section>
		</main>
		<footer></footer>
	</body>

	</html>