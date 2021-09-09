const portainerTemplatesRoute = (app, fs) => {

    // variables
    const dataPath = './data/portainer-templates.json';

    // READ
    app.get('/api/templates/', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = portainerTemplatesRoute;
