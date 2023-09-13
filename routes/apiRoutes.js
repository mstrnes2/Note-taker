const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const {readFromFile, readAndAppend, readAndDelete} = require('../helpers/fsUtils');
const UUID = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    readFromFile('./db/notes.json').then((notes) => res.json(JSON.parse(notes)))
});

router.post('/notes', (req, res) => {
    const {title, text} = req.body;
    const newNote = {title, text, id: UUID()};
    readAndAppend(newNote, './db/notes.json');
    res.json('Success!');
});

router.delete('/notes/:id', (req, res) => {
    readAndDelete(req.params.id, './db/notes.json');
    res.json('Success!');
});

module.exports = router;