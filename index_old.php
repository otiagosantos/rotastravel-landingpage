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
		<nav id="main-navigator" class="default-max-width">
			<div id="logo-container">
				<img src="/assets/icons/logo.png" alt="" class="logo">
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
					<h2>EXPLORE A AMÉRICA DO SUL<br> E VIVA ESSA EXPERIÊNCIA</h2>
				</div>
				<a href="#destinos">
					<span>Arraste para baixo</span>
					<img src="/assets/icons/icone-para-baixo-pg-1.png" alt="Icone seta para baixo.">
				</a>
				<div id="hero-cactu" class="img-container">
					<img src="/assets/images/cactu-pg-1.png" alt="Imagem ilustrativa de um cactu.">
				</div>
				<div id="hero-bg" class="img-container">
					<img src="/assets/images/atacama-pg-1.png" alt="Imagem de fundo do Atacama.">
				</div>

			</section>
		</header>
		<main>
			<section id="destinos">
				<div class="title-container">
					<h3>Conheça nossas rotas e destinos</h3>
				</div>
				<div class="content-container">
					<div id="carousel-container">
						<!-- JS injection -->
					</div>
				</div>
				<div class="img-container img-background">
					<img src="/assets/images/montanha-fundo-pg-2.png" alt="Imagem ilustrativa de montanhas servindo de fundo.">
				</div>
			</section>
			<section id="historia">
				<div class="title-container">
					<h3>História da Rotas Travel</h3>
				</div>
				<div class="content-container col-2">
					<div class="aside-content">
						<div class="img-container">
							<img src="/assets/images/foto-veronica-pg 3.png" alt="Foto de Verônica Matos, CEO da Rotas Travel.">
							<span>Verônica Matos | CEO</span>
						</div>
					</div>
					<div class="main-content">
						<h4><q>VIAJAR É TROCAR A ROUPA DA ALMA</q></h4>
						<span>Mario Quintana</span>

						<p>Sempre que eu viajava, eu queria capturar tudo na lente da minha câmera, mas a cada clique percebia e sentia vibrar meu desejo que mais pessoas tinham que ver o mesmo que eu estava vendo e sentindo, porque não conseguia guardar exatamente como era, que só tirar fotos e fazer vídeos não seria o suficiente para as pessoas realmente viver aquele momento naquele lugar que eu também estava vivenciando.</p>

						<p>A Rotas Travel nasceu do desejo de oferecer experiências únicas e memoráveis, conectando pessoas aos encantos e riquezas naturais, principalmente na América do Sul que é a minha paixão.</p>

						<p>Nos tornamos uma agência de turismo com foco em explorar cada detalhe que esse continente fascinante tem para nos oferecer.</p>

						<p>Nosso compromisso juntamente com nossas experiência nos destinos é garantir que cada viagem seja mais do que apenas uma visita a destinos turísticos, mas sim, uma imersão autêntica e segura. Cuidamos de tudo, desde o planejamento até o suporte durante toda a jornada, para que nossos viajantes possam desfrutar plenamente da experiência com todo compromisso que podemos oferecer e tranquilidade para os nossos viajantes durante todo o percurso da viagem.</p>

						<h4>EXPERIÊNCIAS</h4>
						<p>Somos especialistas em destinos icônicos na América do Sul, oferecendo viagens contemplativas e cheias de aventura.

					</div>
				</div>
				<div class="img-container img-background">
					<img src="/assets/images/logo-com-pouca-opacidade-pg 3.png" alt="Ícone da Rotas Travel ilustrando o fundo do conteúdo da seção.">
				</div>
			</section>
			<section id="localização">
				<div class="title-container">
					<h3>Localização</h3>

					<address>
						Av. General Flores da Cunha
						4001 - Vila Bom Princípio
						Cachoeirinha - RS, 94950-001
					</address>
				</div>
				<div class="content-container col-2">
					<div class="main-content">
						<!-- TO-DO: Alterar Para endereço verdadeiro -->
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.503783219253!2d-51.0816023229049!3d-29.93618467497824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ec157658bf%3A0xcbe2a77ce2c47056!2sAv.%20Gen.%20Flores%20da%20Cunha%2C%204001%20-%20Vila%20Bom%20Principio%2C%20Cachoeirinha%20-%20RS%2C%2094950-001!5e0!3m2!1spt-BR!2sbr!4v1738736068186!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

					</div>
					<div class="asside-content">
						<div class="img-container">
							<img src="/assets/images/fachada-pg-4.png" alt="Imagem da fachada do prédio onde se encontra a Rotas Travel.">
						</div>
					</div>
				</div>
				<div class="img-container img-background">
					<img src="/assets/images/machupichu-pg-4.png" alt="Imagem de fundo de Machu Picchu">
				</div>
			</section>
			<section id="contato"></section>
		</main>
		<footer></footer>
	</body>

	</html>