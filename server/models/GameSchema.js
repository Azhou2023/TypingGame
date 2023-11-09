const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  sentence: String, 
  correctCharacters: String,
  incorrectCharacters: String,
  wpm: Number,
  time: Number
});

const GameStats = mongoose.model('Game Stats', gameSchema);

module.exports = {GameStats};