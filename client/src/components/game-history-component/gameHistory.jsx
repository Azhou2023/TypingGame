import styles from './gameHistory.module.css';

const HistoryModule = ({sentence, correctCharacters, incorrectCharacters, wpm, time}) => {
    return (
        <div className={styles.card}> 
            <p className={styles.content}>
                <b>Sentence: </b> {sentence}
            </p>
            <p className={styles.content}>
                <b>Correct Characters: {correctCharacters} </b> 
            </p>
            <p className={styles.content}>
                <b>Incorrect Characters: {incorrectCharacters}</b> 
            </p>
            <p className={styles.content}>
                <b>Words Per Minute: </b> {wpm}
            </p>
            <p className={styles.content}>
                <b>Time (in mins): </b> {time}
            </p> 

            </div>

    )
}


    
export default HistoryModule;


// Create a functional component that will display game history
// Remember to return one top-level div, and nest the rest of your elements inside of it
// It should take in props for the sentence, correctChars, incorrectChars, wpm, and time
// Export your GameHistory component!

