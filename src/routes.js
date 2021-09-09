// import other routes
const sionBotStatsRoute = require('./routes/api/bots/sion/sionBotStats');
const portainerTemplatesRoute = require('./routes/api/portainerTemplatesRoute');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    sionBotStatsRoute(app, fs);
    portainerTemplatesRoute(app, fs);

};

module.exports = appRouter;