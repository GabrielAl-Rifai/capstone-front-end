import Head from "next/head";
import "tailwindcss/tailwind.css";

function RecipeSearch({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RapidAPI - Recipe Search App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default RecipeSearch;
