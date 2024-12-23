const express = require('express');
const router = express.Router();

const Comment = require('../Models/Comment');

router.get('/comments', (req, res) => {
    res.send('Comments');
}).
post('/comments', (req, res) => {
    res.send('Comments');
});

module.exports = router;
