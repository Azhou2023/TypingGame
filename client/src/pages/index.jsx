import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar-component/navbar.jsx";

function Home() {
  return (
    <div className={styles.page}>
      <title>TritonType | Home</title>
      <Navbar />
      <div className={styles.welcome}>
        <h1> TritonType </h1>
        <br />
        <p className={styles.text}>
          Click on 'Play Game' in the top right to begin!
        </p>
        <p className={styles.text}>
          Click on 'History' to view all games played and the top 3 scores
          achieved.
        </p>
      </div>
    </div>
  );
}

export default Home;
