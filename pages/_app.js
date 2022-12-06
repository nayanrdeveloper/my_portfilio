import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/myImage_1.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="nayanrdeveloper,Nayan Radadiya,portfolio,blockchain,front-end"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nayanrdeveloper-portfolio.netlify.app/"
        />
        <meta property="og:title" content="Nayan Radadiya Portfolio" />
        <meta
          property="og:description"
          content="Nayan Radadiya looking Intern in Blockchain Fronted role.He have a 2+ years experience in Fronted and Python Development"
        />
        <meta
          property="og:image"
          content="https://cdn-icons-png.flaticon.com/512/2779/2779764.png"
        />
        <meta name="language" content="ES" />
        <meta
          name="author"
          content="Nayan Radadiya, nayanrdeveloper@gmail.com"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nayanrdeveloper-portfolio.netlify.app/"
        />
        <meta property="twitter:title" content="Nayan Radadiya Portfolio" />
        <meta
          property="twitter:description"
          content="Nayan Radadiya looking Intern in Blockchain Fronted role.He have a 2+ years experience in Fronted and Python Development."
        />
        <meta
          property="twitter:image"
          content="https://cdn-icons-png.flaticon.com/512/2779/2779764.png"
        />

        <meta
          name="url"
          content="https://nayanrdeveloper-portfolio.netlify.app/"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Nayan Radadiya looking Intern in Blockchain Fronted role.He have a 2+ years experience in Fronted and Python Development."
        />
        <link
          rel="apple-touch-icon"
          href="https://cdn-icons-png.flaticon.com/512/2779/2779764.png"
        />
        <title>Nayan Radadiya Portfolio</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
