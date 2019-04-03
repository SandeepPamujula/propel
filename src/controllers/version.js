'use strict';

const packageDetails = require('../../package.json');
const Promise = require('bluebird');

module.exports = (req, res) => {
   return Promise.resolve({name: packageDetails.name, version: "v1.0"});
};
