const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
});

router.get('*', (req, res) => {
    res.
});