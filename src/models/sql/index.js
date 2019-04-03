'use strict';

const Sequelize = require('sequelize');
const path = require('path');
const {extend} = require('lodash');
const {existsSync, readdirSync} = require('fs');

const config = require('../../config');

const sequelize = new Sequelize(config.sql.database, config.sql.username, config.sql.password, {
    host: config.sql.host,
    port: config.sql.port,
    dialect: config.sql.dialect,
    storage: config.sql.storage || null,
    logging: config.sql.enableLogging,
    dialectOptions: {decimalNumbers: true}
});

const db = {};

function readModels(modelsDir) {
    if (!existsSync(modelsDir)) return;

    readdirSync(modelsDir)
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.indexOf('.e2e.') === -1))
    .forEach(file => {
        const model = sequelize.import(path.join(modelsDir, file));
        db[model.name] = model;
    })

}
readModels(__dirname);

module.exports = extend({
    sequelize: sequelize
}, db);