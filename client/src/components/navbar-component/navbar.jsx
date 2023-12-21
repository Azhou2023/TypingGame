import styles from './navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">Home</Link>
              
            </div>
            <div className={styles.nav_buttons}>
            <Link href="/gamePage">Play Game</Link>
            <Link href="/gameHistory">History</Link>
            </div>

        </div>
    )
}

export default Navbar;

