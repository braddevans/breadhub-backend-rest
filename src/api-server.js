const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const config = require('../config.json');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connectionString = config.connectionString

require('./routes.js')(app, fs);

// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// })

const apiServer = app.listen(55417, "0.0.0.0", () => {
    console.log('listening on port %s...', apiServer.address().port);
});