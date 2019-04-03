'use strict';

module.exports = (app) => {
    
    app.use('/api', require('./api'));  

    app.get('*', (req, res) => res.error([404, 'Resource not found']));
    return app;
};