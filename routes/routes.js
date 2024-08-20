const app = require('express').Router();

app.get('/health', (req, res)=>{
    return res.send(`App is healthy`);
});

const {showPage, handleShortenRequest, handleRedirect} = require('../controllers/shotner.controller');

app
.get('/', showPage)
.post('/', handleShortenRequest)
.get('/:id', handleRedirect);


module.exports = app;