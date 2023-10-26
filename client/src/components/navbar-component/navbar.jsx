import styles from './navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">Home</Link>
              
            </div>
            <div className={styles.nav_buttons}>
            <Link href="/game">Add Sentence</Link>
            <Link href="/game">Play Game</Link>
            <Link href="/history">History</Link>
            {/* Link to other pages here! */}
            </div>

        </div>
    )
}

export default Navbar;

// Export the NavBar, and import it in pages/_app.jsx to render it on all pages of your website!