import Navbar from "../components/navbar-component/navbar.jsx"
import styles from '../styles/Home.module.css'
import TypingGameComponent from "@/components/game-component/TypingGameComponent.jsx"



export default function gamePage() {
    return(
        <div className={styles.page}>
            <Navbar/>
            {/* <TypingGameComponent/> */}
            <div className={styles.welcome}>
                <h1>Game Page</h1>
                <TypingGameComponent/>
                </div>
            
      </div>
    )
};