const GameStats = require('../models/GameSchema');

const getGame = async (req, res) => {

    const gameStats = await GameStats.find();
    res.status(200).json(gameStats);
 
};

const postGame = async (req, res) => {
    // newGame = req.body;
    // if(newGame.sentence===undefined || newGame.correctCharacters===undefined 
    //     || newGame.incorrectCharacters===undefined || newGame.wpm===undefined 
    //     || newGame.time===undefined){
    //     res.status(400).json({error:"Missing value"});
    //     return;
    // }
    // if(newGame.correctCharacters+newGame.incorrectCharacters!=newGame.sentence.length){
    //     res.status(400).json({error:"Sentence length does not match"});
    //     return;
    // }else{
    //     const newGameStat = await GameStats.create(newGame);
    //     res.status(200).json(newGameStat);
    // }  

    const newGame = await GameStats.create(req.body);
    res.status(200).json(newGame);

   
};


module.exports = {getGame, postGame};