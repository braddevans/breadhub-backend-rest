const {MongoClient} = require("mongodb");
let server = require("../api-server.js");

const DBConnector = () => {
    let connectionString = server.getGlobalVariables().connectionString;

    MongoClient.connect(connectionString, {useUnifiedTopology: true})
        .then(client => {
            console.log('Connected to Database')
            server.setDatabaseConnection(client);
        })
        .catch(error => console.error(error))

};

module.exports = DBConnector;