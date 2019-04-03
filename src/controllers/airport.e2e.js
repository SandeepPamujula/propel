'use strict';


const request = require('supertest');
const db = require('../models/sql');
const app = require('../console/webserver/app');

var server = request.agent("http://localhost:3000");


describe('GET /api/v1.0/airports', () => {
  beforeEach(async () => {
    return await clearDb();
  });

  it('Should get all the airports', async () => {
     await server
    .get(`/api/v1.0/airports`)
    .expect('Content-Type', /json/)
    .expect(200);
  });

});

