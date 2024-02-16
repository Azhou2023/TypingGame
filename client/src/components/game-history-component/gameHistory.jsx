import styles from "./gameHistory.module.css";

const HistoryModule = ({ sentence, accuracy, wpm, time }) => {
  return (
    <div className={styles.card}>
      <p className={styles.content}>Sentence: {sentence}</p>
      <p className={styles.content}> Accuracy: {accuracy}</p>
      <p className={styles.content}>Words Per Minute: {wpm}</p>
      <p className={styles.content}>Time: {time} s</p>
    </div>
  );
};

export default HistoryModule;
