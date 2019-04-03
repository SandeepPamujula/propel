'use strict';

require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';
const path = `./env/${env}/config.js`;

module.exports = require(path);