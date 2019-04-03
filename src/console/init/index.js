'use strict';

const db = require('../../models/sql');
const Promise = require('bluebird');
const co = Promise.coroutine;
const _ = require('lodash');


module.exports = () =>
  Promise.all([initSql()])
    .then(console.log('init completed..'));

function initSql() {
  return co(function*() {
    console.log('Dropping sql...'); // eslint-disable-line
    yield dropTables();
    yield db.sequelize.sync();
  })();
}

function dropTables() {
  //sequelize only drops tables defined in its schema
  //so we drop manually
  const query = `SELECT
                    table_schema || '.' || table_name
                  FROM
                    information_schema.tables
                  WHERE
                    table_type = 'BASE TABLE'
                  AND
                    table_schema NOT IN ('pg_catalog', 'information_schema');`;
  return db.sequelize.query(query)
  .spread(tables => _.map(tables, table => table[_.keys(table)[0]]))
  .then(tables => {
    const query = `DROP TABLE IF EXISTS ${tables.join(',')}`;
    return tables.length && db.sequelize.query(query);
  });
 
    
}

if (require.main === module) {
  module.exports().then(() => console.log('Done'));//eslint-disable-line
}
