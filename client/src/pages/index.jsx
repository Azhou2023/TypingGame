import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmLogo from "../assets/acmLogo.png"
import Navbar from "../components/navbar-component/navbar.jsx"



function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
        <div className={styles.welcome}>
          <h1> AndrewType </h1>
          <h2>The most polished typing game ever made.</h2>
          <br /><br />
          <p class={styles.text}>Click on 'Play Game' in the top right to begin!</p>
          <p class={styles.text}>Click on 'History' to view all games played and the top 3 scores achieved.</p>

        </div>
      <div className={styles.image}>
        <a href="https://acmucsd.com/" target="_blank"><Image src={acmLogo} height="150" width="150"></Image></a>
      </div>
    </div>
  );
}

export default Home;
