'use strict';

const express = require('express');
const app = express.Router({mergeParams: true});
const dispatch = require('../../../utilities/dispatch')();
const controllers = require('../../../controllers');

/*eslint-disable */
/**
 * @api {get} /api/v1.0/airports airports
 * @apiName list
 * @apiDescription List of airports
 * @apiGroup Airport
 * @apiVersion 1.0.0
 * @apiExample {curl} Example usage:
 *  curl {{server-uri}}/api/v1.0/airports
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 1,
 *          "name": "Kempegowda international",
 *          "city": "Bangalore",
 *          "country": "India"
 *      }
 *   ]
 */
/*eslint-enable */
app.get('/airports', dispatch(controllers.airport.index));
/*eslint-disable */
/**
 * @api {get} /api/v1.0/flights flights
 * @apiName flights
 * @apiHeader {Integer} originId origin airport ID
 * @apiHeader {Integer} destinationId destination airport ID
 * @apiHeader {Date} travel date
 * @apiDescription List of flights
 * @apiGroup Flight
 * @apiVersion 1.0.0
 * @apiExample {curl} Example usage:
 *  curl -H "originId: 1, destinationId: 2, travelDate: 2019-03-01" {{server-uri}}/api/v1.0/flights
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 1,
 *          "flightCode": "indigo-2",
 *          "startTime": 1551430800,
 *          "travelDuration": 160,
 *          "totalBookedSeats": 0
 *      }
 *   ]
 */
/*eslint-enable */
app.get('/flights', dispatch(controllers.flight.index));
app.post('/bookings', dispatch(controllers.booking.create));
app.get('/bookings/:bookingId', dispatch(controllers.booking.index));
app.put('/bookings/:bookingId/action/cancel', dispatch(controllers.booking.cancel));

app.get('*', (req, res) => res.error([404, 'Resource not found']));

module.exports = app;   