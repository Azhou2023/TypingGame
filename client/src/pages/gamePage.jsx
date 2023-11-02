// import TypingGameComponent from "../components/game-component/TypingGameComponent";
import Navbar from "../components/navbar-component/navbar.jsx"
import styles from '../styles/Home.module.css'



export default function gamePage() {
    return(
        <div>
            <Navbar/>
            {/* <TypingGameComponent/> */}
            <div className={styles.welcome}>
                <h1>Game Page</h1>
                
                </div>
            
      </div>
    )
};