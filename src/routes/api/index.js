'use strict';

const express = require('express');
const app = express.Router({mergeParams: true});
const controllers = require('../../controllers');
const dispatch = require('../../utilities/dispatch')();
    
app.use('/v1.0', require('./v1.0'));  

app.get('/version', dispatch(controllers.version));
app.get('*', (req, res) => res.error([404, 'Resource not found']));

module.exports = app;
