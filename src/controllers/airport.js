'use strict';

const _ = require('lodash');

const db = require('../models/sql');

exports.index =  async req => {
  return db.airport.findAll({ attributes: ['id', 'name', 'city', 'country']})
    .then(rows => rows.map(row => row.dataValues));
};
