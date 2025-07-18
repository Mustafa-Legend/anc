import Head from 'next/head';
import Script from 'next/script';

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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{capitalized} - ملف شخصي</title>
        <meta property="og:title" content={`${capitalized} - ملف شخصي`} />
        <meta property="og:description" content={`هذه الصفحة تخص ${capitalized}`} />
        <meta property="og:image" content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi52ZLn3nr1zOwQpETR1TgGydtN2O_ElKvlT8m2sdT9gZOrdIssa8NlFsXPDDTy1YPF9JeAmN68kNpQC4NNw7QFX6XlTJBdLAG0xfyWmHekXPkySGRdMj4et0OxszXdtNke_su3mb5xoaZ0a29aLn3HcdL_8iPFflHw9y0a6miQ84TULXz8H5ELsDI5vNo/s1600/ogimage.jpg" />
        <meta property="og:url" content={`https://xte.abbraccio.site/${username}`} />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="/styles/profile.css" />
      </Head>

      <header>
        <a href="/">
          <img src="https://verplay.pro/redi/cropped-ABOGADOS-1-Photoroom.png" alt="Abogado Real" />
        </a>
      </header>

      <main className="content-loop">
        {articles.map((article, index) => (
          <div key={index} className="article-loop">
            <div className="article-image" style={{ backgroundImage: `url('${article.image}')` }}></div>
            <p className="entry-title">{article.title}</p>
          </div>
        ))}
      </main>

      <footer>
        <p>&copy; 2025 Abogado Real. Todos los derechos reservados.</p>
        <p><a href="#">Cookies</a> | <a href="#">Aviso Legal</a> | <a href="#">Privacidad</a></p>
      </footer>

      <div id="entrada-overlay">
        <button id="btn-acceder">
          <img src="https://visionempresarial.online/sc/new/8766f384-f63e-4b7a-ad59-35416aa66a98.png" alt="Acceder" />
        </button>
        <div id="contador-entrada">7</div>
        <button id="btn-close-ad">❌</button>
      </div>

      <div className="click-point" id="click-point-1">CLICK</div>
      <div className="click-point" id="click-point-2">CLICK</div>
      <div id="bloqueo-total" style={{ display: 'none' }}></div>

      <Script src="/scripts/overlay.js" strategy="afterInteractive" />
    </>
  );
}

const articles = [
  {
    image: 'https://verplay.pro/redi/80-400x267.jpg',
    title: 'Derechos del Propietario vs. Ocupante Ilegal: ¿Qué Hacer?',
  },
  {
    image: 'https://verplay.pro/redi/gastos-impuestos-compraventa-viviendas-400x267.jpg',
    title: 'Impuestos en la Compra y Venta de Inmuebles: Lo Básico',
  },
  {
    image: 'https://verplay.pro/redi/proteccion-al-inquilino-1400x933-1-400x267.jpeg',
    title: 'Donaciones de Propiedades: Aspectos Legales que Debes Conocer',
  },
  {
    image: 'https://verplay.pro/redi/Derechos-y-obligaciones-del-inquilino-en-una-vivienda-de-alquiler-alojamiento-apartamento-alcaniz-flats-scaled-1-400x267.jpg',
    title: 'Inquilino vs. Propietario: Derechos y Deberes en Arrendamientos',
  },
  {
    image: 'https://verplay.pro/redi/usucapion-o-prescripcion-administrativa-400x267.jpeg',
    title: '¿Qué es la Usucapión y Cómo Reclamar Propiedad?',
  },
  {
    image: 'https://verplay.pro/redi/Diseno-sin-titulo-scaled-1-400x267.jpg',
    title: 'Aspectos Legales en la Compra de Terrenos Rústicos',
  },
];
