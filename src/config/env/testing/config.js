'use strict';

const config = require('../default/config');

config.sql.database += '_testing';

config.logger.streams = [
  {
    stream: process.stdout,
    level: 'error'
  }
];

module.exports = config;
