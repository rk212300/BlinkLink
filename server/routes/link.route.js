const express = require('express');
const { shortenLink } = require('../controllers/link.controller');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome to the link route');
});

router.post('/shorten', shortenLink);

module.exports = router;