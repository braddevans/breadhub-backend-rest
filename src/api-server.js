const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.json');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let globalVariables = {
    connectionString: config.connectionString,
    databaseConnection: null
};

exports.getGlobalVariables = function () {
    return globalVariables;
};

exports.getDatabaseConnection = function () {
    return globalVariables.databaseConnection;
};

exports.setDatabaseConnection = function (conn) {
    globalVariables.databaseConnection = conn;
};

// Connect to MongoDB
require('./database/DBConnector.js')();

// Initialize routes
require('./routes.js')(app, fs);

// Initialize Express App
const apiServer = app.listen(55417, "0.0.0.0", () => {
    console.log('listening on port %s...', apiServer.address().port);
});