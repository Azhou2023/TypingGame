import Navbar from "../components/navbar-component/navbar.jsx" 
import HistoryModule from "../components/game-history-component/gameHistory.jsx"
import styles from '../styles/Home.module.css'



export default function gameHistory() {
    return (
        <div>
            <Navbar/>
            <div className={styles.welcome}>
                <h3>Top 3 Games</h3>
                <div className={styles.topThree}>
                    <HistoryModule sentence={"Hello"}/>
                    <HistoryModule sentence={"Hey"}/>
                    <HistoryModule sentence={"Sentence Three"}/>

                </div>
            </div>
            {/* Container for top 3 games */}




            {/* Container for all games */}
            </div>
    );
}