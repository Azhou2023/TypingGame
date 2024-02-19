import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar-component/navbar.jsx";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
