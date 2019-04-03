'use strict';


const request = require('supertest');
const db = require('../models/sql');
const app = require('../console/webserver/app');
const server = request.agent("http://localhost:3000");

process.env.NODE_ENV = 'testing';

let originId=1;
let destinationId=2;
let travelDate = "2019-03-01";


async function addFlightDetails() {
    let query = `insert into airport(name, city, country, search_match) 
                    values 
                    ('Kempegowda international', 'Bangalore', 'India', 'Bengaluru Bangalore Kempegowda'), 
                    ('Indira Gandhi International', 'Delhi', 'India', 'Delhi Indira Gandhi');`;

    await db.sequelize.query(query).spread(results => results);
    let airports = await db.airport.findAll({raw:true});
    console.log(airports);
    originId = airports[0].id;
    destinationId = airports[1].id;
}
describe('GET /api/v1.0/flights', () => {
  beforeEach(async () => {
     await clearDb();
     await addFlightDetails();
  });

  it('Should get all the flights', async () => {
      
     await server
    .get(`/api/v1.0/flights`)
    .set('Accept', 'application/json')
    .set('originId',originId)
    .set('destinationId',destinationId)
    .set('travelDate', travelDate)
    .expect('Content-Type', /json/)
    .expect(200);
  });

});

