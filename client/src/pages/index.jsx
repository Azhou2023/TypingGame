import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmLogo from "../assets/acmLogo.png"
import Navbar from "../components/navbar-component/navbar.jsx"



function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div>
      <Navbar/>
        <div className={styles.welcome}>
          <h2> Welcome to Andrew </h2>
          <p>Andrew Land: happy fun place (no violense)</p>
        </div>
      <div className={styles.image}>
        <Image src={acmLogo} height="300" width="300"></Image>
        <p>This is Andrew</p>
      

      </div>
    </div>
  );
}

export default Home;
