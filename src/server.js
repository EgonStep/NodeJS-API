// loads .env
require('dotenv').config();

// imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

// create server
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// use routes
server.use('/api', routes);

// init server
server.listen(process.env.PORT, () => {
    console.log(`server init on port http://localhost:${process.env.PORT}`);
});