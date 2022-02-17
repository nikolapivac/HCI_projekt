import "../styles/globals.css";
import Head from "next/head";
import styles from "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head className={styles.color}>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" key="icon" />
      </Head>
      <Component {...pageProps} />
      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
}

export default MyApp
