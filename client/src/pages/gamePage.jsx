import Navbar from "../components/navbar-component/navbar.jsx";
import styles from "../styles/Home.module.css";
import TypingGameComponent from "@/components/game-component/TypingGameComponent.jsx";

export default function gamePage() {
  return (
    <div className={styles.page}>
      <title>Play Game</title>
      <Navbar />
      <div className={styles.gameWrapper}>
        <h1>Play Game</h1>
        <h3 style={{ color: "gainsboro" }}>
          Note: Games must score an accuracy of 75% or higher to be recorded
        </h3>
        <TypingGameComponent />
      </div>
    </div>
  );
}
