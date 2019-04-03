'use strict';

const {readdirSync} = require('fs');
const {each} = require('lodash');

function readControllers(dir) {
    const controllers = {};
    readdirSync(dir)
        .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.indexOf('.e2e.') === -1))
        .forEach(file => controllers[file.replace('.js', '')] = require(`${dir}/${file}`));
    return controllers;
}

module.exports = readControllers(__dirname);
