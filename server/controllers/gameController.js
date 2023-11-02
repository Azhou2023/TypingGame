const getGame = async (req, res) => {
    const game = {
        sentence: "Hello",
        correctCharacters: 3,
        incorrectCharacters: 5,
        wpm: 100,
        time: 13.33
    };
    res.status(200).json(game);

};

const game = async (req, res) => {
    const message = req.body;

    if(message.sentence===undefined || message.correctCharacters===undefined 
        || message.incorrectCharacters===undefined || message.wpm===undefined 
        || message.time===undefined){
        res.status(400).json({error:"Missing value"});
        return;
    }

    if(message.correctCharacters+message.incorrectCharacters!=message.sentence.length){
        res.status(400).json({error:"Sentence length does not match"});
        return;
    } 

   
    res.status(200).json(message);
};


module.exports = {getGame, game};