const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const { dbConnection } = require('./config/db');
require('dotenv').config();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routes);



app.listen(process.env.PORT, ()=>{
    dbConnection();
    console.log(`app is running on port ${process.env.PORT}`);
});