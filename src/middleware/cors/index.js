'use strict';

module.exports = function (req, res, next) {
  // enable cross-origin resource sharing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);// allows cookies

  return req.method === 'OPTIONS' ? res.end() : next();
};
