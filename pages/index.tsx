import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Inicio } from "./components/inicio";
import { CssBaseline } from "@mui/material";

const Home: NextPage = () => {
  return (
    <CssBaseline>

    <div className={styles.container}>
      <Head>
        <title>Students DataBase</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Inicio />
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
    </CssBaseline>
  );
};

export default Home;
