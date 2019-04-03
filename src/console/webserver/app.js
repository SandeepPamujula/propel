
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const errorHandler = require('../../middleware/errorHandler');
const cors = require('../../middleware/cors');

module.exports = () => {

    app.use(express.static('/Users/apple/Desktop/sande/flyhigh/src/public'));

    console.log('/Users/apple/Desktop/sande/flyhigh/src/public');
    app.use('/api', (req, res, next) => {
        res.set('Content-Type', 'application/json');
        next();
    });
    app.use(cors);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json({limit: '3mb'}));
    app.use(errorHandler);
    app.set('trust proxy', 'loopback');
    require('../../routes')(app);   

    return app;
};
