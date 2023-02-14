import type { NextPage } from "next";
import { Average } from "./components/average";
import styles from "../styles/Home.module.css";

const AveragePage: NextPage = () => {
  return(
    <main className={styles.main}>
      <Average />
    </main>)
};

export default AveragePage;
