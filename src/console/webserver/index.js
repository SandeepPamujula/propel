'use strict';

const app = require('./app');
const db = require('../../models/sql');
const config = require('../../config');

module.exports = function () {
  return db.sequelize.sync()
  .then(app)
  .then(app => {
    app.listen(config.http.port);
    console.log(`mooncore server listens on port ${config.http.port}`);
    console.log(`NODE_ENV = ${process.env.NODE_ENV || 'development'}`);
  })
  .catch(console.error);
};