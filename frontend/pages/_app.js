import { Provider } from "react-redux";
import store from "../redux/store";
import "/styles/globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>CRUD with NextJS</title>
        <meta name="description" content="crud app next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
