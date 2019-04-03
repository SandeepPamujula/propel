'use strict';

process.env.NODE_ENV = 'testing';

global.app = require('../../src/console/webserver/app');
global.clearDb = require('./clearDb');
