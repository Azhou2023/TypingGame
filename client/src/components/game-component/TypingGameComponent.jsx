import React, { useState, useEffect } from "react";
import useTypingGame, { PhaseType } from "react-typing-game-hook";
import styles from "./TypingGameComponent.module.css";
import axios from "axios";
import HistoryModule from "../game-history-component/gameHistory.jsx";

const sentenceData = [
  "The sun rose over the horizon, casting a warm golden glow.",
  "She sipped her coffee and watched the raindrops dance on the windowpane.",
  "The old oak tree stood tall and majestic in the middle of the field.",
  "The cat curled up on the windowsill, purring contentedly.",
  "In the quiet of the night, the stars twinkled like diamonds in the sky.",
  "The aroma of freshly baked bread wafted through the air.",
  "He gazed at the old photo, lost in memories of days gone by.",
  "The waves crashed against the rocky shore, creating a soothing melody.",
  "The laughter of children echoed through the park as they played.",
  "The detective examined the clues carefully, searching for answers.",
  "She opened the dusty book and was transported to a different world.",
  "The cityscape glittered with lights as night fell.",
  "The chef carefully seasoned the dish with a pinch of salt.",
  "The hiker reached the summit and marveled at the breathtaking view.",
  "The clock ticked relentlessly, marking the passage of time.",
];

const TypingGameComponent = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedSentence, setSelectedSentence] = useState(sentenceData[0]);
  const [statsObject, setStatsObject] = useState(null);

  const {
    states: { chars, charsState, phase, correctChar, errorChar },
    actions: { insertTyping, resetTyping, deleteTyping, getDuration },
  } = useTypingGame(selectedSentence, {
    skipCurrentWordOnSpace: false,
    pauseOnError: false,
    countErrors: "everytime",
  });

  const handleGameStart = () => {
    console.log("handleGameStart triggered");
    if (phase === PhaseType.NotStarted) {
      console.log(phase);
      resetTyping();
      setGameStarted(true);
    }
  };

  const calculateWPM = () => {
    let numWords = selectedSentence.split(" ").length;
    let time = getDuration() / 1000 / 60;
    return numWords / time;
  };

  const handleGameEnd = () => {
    let stats = {
      sentence: chars,
      accuracy:
        (correctChar / (correctChar + errorChar)).toFixed(2) * 100 + "%",
      wpm: calculateWPM().toFixed(2),
      time: (getDuration() / 1000).toFixed(2),
    };

    setStatsObject(stats);
    if ((correctChar / (correctChar + errorChar)).toFixed(2) > 0.75) {
      sendGameStats(stats);
    }
  };

  const sendGameStats = async (stats) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/game",
        stats
      );
      console.log(response.data);
    } catch (error) {
      console.error("Failed to create game stats", error);
    }
  };

  useEffect(() => {
    console.log(chars.length);
    console.log(phase);
    if (phase === PhaseType.Ended) {
      handleGameEnd();
    }
  }, [phase, chars.length]);

  return (
    <div className={styles.typing_game}>
      {!gameStarted ? (
        <div className={styles.start_game}>
          <div>
            <h2 style={{ color: "gainsboro" }}>Select a Sentence:</h2>
            <select
              name="Sentences"
              id={styles.sentence_selector}
              onChange={(e) => setSelectedSentence(e.target.value)}
            >
              {sentenceData.map((sentence, index) => (
                <option id={styles.options} key={index}>
                  {sentence}
                </option>
              ))}
            </select>
          </div>
          <button class={styles.start_button} onClick={handleGameStart}>
            Start Game
          </button>
        </div>
      ) : (
        <div className={styles.typing_component}>
          <p style={{ color: "gainsboro" }}>
            Click on the sentence below and start typing!
          </p>
          <h2
            onKeyDown={(e) => {
              const key = e.key;
              if (key === "Escape") {
                resetTyping();
              } else if (key === "Backspace") {
                deleteTyping(false);
              } else if (key.length === 1) {
                insertTyping(key);
              }

              e.preventDefault();
            }}
            tabIndex={1}
          >
            {chars.split("").map((char, index) => {
              let state = charsState[index];
              let color =
                state === 0 ? "#c9c9c9" : state === 1 ? "#c69214" : "#FF6B6B";
              return (
                <span key={char + index} style={{ color }}>
                  {char}
                </span>
              );
            })}
          </h2>
        </div>
      )}
      <span id={styles.endCard}>
        {statsObject && <HistoryModule {...statsObject} />}
      </span>
    </div>
  );
};

export default TypingGameComponent;
