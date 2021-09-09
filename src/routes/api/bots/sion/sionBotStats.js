const botStatRoutes = (app, fs) => {

    // variables
    const dataPath = './data/bots/sion/stats.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/api/bots/sion/stats/', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/api/bots/sion/stats/', (req, res) => {

        readFile(data => {
                data = req.body;

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send('stats Created');
                });
            },
            true);
    });


    // UPDATE
    app.put('/api/bots/sion/stats/', (req, res) => {

        readFile(data => {
                data = req.body;

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`Stats updated`);
                });
            },
            true);
    });


    // DELETE
    app.delete('/api/bots/sion/stats/', (req, res) => {

        readFile(data => {
                delete data;

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`Stats Removed`);
                });
            },
            true);
    });
};

module.exports = botStatRoutes;
