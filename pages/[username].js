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
        <title>{capitalized} - ملف شخصي</title>
        <meta property="og:title" content={`${capitalized} - ملف شخصي`} />
        <meta property="og:description" content={`هذه الصفحة تخص ${capitalized}`} />
        <meta property="og:image" content={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi52ZLn3nr1zOwQpETR1TgGydtN2O_ElKvlT8m2sdT9gZOrdIssa8NlFsXPDDTy1YPF9JeAmN68kNpQC4NNw7QFX6XlTJBdLAG0xfyWmHekXPkySGRdMj4et0OxszXdtNke_su3mb5xoaZ0a29aLn3HcdL_8iPFflHw9y0a6miQ84TULXz8H5ELsDI5vNo/s1600/ogimage.jpg`} />
        <meta property="og:url" content={`https://yourdomain.com/${username}`} />
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>مرحبًا {capitalized}</h1>
        <p>هذه صفحتك الشخصية.</p>
      </main>
    </>
  );
}
