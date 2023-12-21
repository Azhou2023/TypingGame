const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.get('/game', gameController.getGame);

router.post('/game', gameController.postGame);

module.exports = router;