const app = require('express').Router();

app.get('/health', (req, res)=>{
    return res.send(`App is healthy`);
});

const {showPage, handleShortenRequest, handleRedirect} = require('../controllers/shotner.controller');

// middlewre
const { checkCache } = require('../middleware/cache');

app
.get('/', showPage)
.post('/', handleShortenRequest)
.get('/:id', checkCache, handleRedirect);


module.exports = app;