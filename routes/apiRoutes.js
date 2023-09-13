const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));
});