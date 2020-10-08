// imports
const express = require('express');
const router = express.Router();
const NoteController = require('./controllers/NoteController');

// create routes
router.get('/health', NoteController.health);

router.get('/notes', NoteController.getNotes);
router.get('/notes/:id', NoteController.getSingleNote);
router.post('/notes', NoteController.createNote);
router.put('/notes/:id', NoteController.updateNote);
router.delete('/notes/:id', NoteController.deleteNote);

// export routes
module.exports = router;