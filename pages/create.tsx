import type { NextPage } from "next";
import { Form } from "./components/createStudent";
import styles from "../styles/Home.module.css";

const AveragePage: NextPage = () => {
  return (
    <main className={styles.main}>
      <Form />
    </main>
  );
};

export default AveragePage;
