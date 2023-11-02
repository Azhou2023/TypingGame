const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

// Add API routes here
router.get('/game', gameController.getGame);

router.post('/game', gameController.game);

module.exports = router;