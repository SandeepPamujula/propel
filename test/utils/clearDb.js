'use strict';

const db = require('../../src/models/sql');
const Promise = require('bluebird');
const co = Promise.coroutine;
const _ = require('lodash');

function clearSql() {
  const tables = _.keys(db)
  .filter(key => key !== 'sequelize' && key !== 'Sequelize');

  return Promise.map(tables, table => db.sequelize.query(`DELETE FROM ${table}`));
}


module.exports = () => {
  return Promise.all([clearSql()])
  .then(Promise.resolve());
};
