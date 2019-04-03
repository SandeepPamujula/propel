'use strict';

const config = require('../default/config');

config.sql.database += '_dev';

module.exports = config;