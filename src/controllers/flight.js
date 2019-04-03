'use strict';

const _ = require('lodash');
const moment = require('moment');

const db = require('../models/sql');
const constants = require('../constants/common');


exports.index =  async req => {

    const originId = req.get('originId');
    const destinationId = req.get('destinationId');
    const travelDate = req.get('travelDate');
    const travelDateTimeStart = moment(travelDate, "YYYY-M-D").unix();
    const travelDateTimeEnd = travelDateTimeStart + constants.DAY_IN_SECONDS;

    console.log('====> '+originId, destinationId, travelDateTimeStart, constants.DAY_IN_SECONDS);

    const query = `select id, flight_code as flightCode, extract(epoch from start_time at time zone 'utc') as startTime, 
                  travel_duration as travelDuration, total_booked_seats as totalBookedSeats
                      from flight_chart 
                      where origin_id=${originId} 
                          and destination_id=${destinationId} 
                          and extract(epoch from start_time at time zone 'utc') BETWEEN  ${travelDateTimeStart} AND ${travelDateTimeEnd};`
    console.log(query);
    const flights = await db.sequelize.query(query).spread(results => results);
    return flights;
};
