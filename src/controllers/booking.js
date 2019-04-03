'use strict';

const _ = require('lodash');
const moment = require('moment');
const promise = require('bluebird');


const db = require('../models/sql');
    const errors = require('../constants/errors');

exports.index = async req => {

    const bookingId = req.params.bookingId;

    let booking = await db.booking.find({where: {code: bookingId}});
    if (!booking) {
        return promise.reject(errors.invalid_booking_id);
    }
    return booking;

};

exports.create =  async req => {

    const flightChartId = req.body.flightChartId;
    const requiredSeats = req.body.requiredSeats;
    let bookingId = uniqueId();

    const query = `WITH book AS (
                        insert into booking(code,flight_chart_id, status, seats_booked) values ('${bookingId}', ${flightChartId}, 'booked', ${requiredSeats}) 
	                    ), fc AS (
	                    UPDATE flight_chart set total_booked_seats = (total_booked_seats + ${requiredSeats}) where id=${flightChartId}
		                    returning id
                        ) SELECT id from fc;`
                        // where (select (total_seats >= (total_booked_seats+${requiredSeats})) as canBook from flight inner join flight_chart as fc on fc.flight_code = code and fc.id=${flightChartId})=true;
    await db.sequelize.query(query);
    return {bookingId};
};

exports.cancel =  async (req, res) => {

    const bookingId = req.params.bookingId;

    let booking = await db.booking.find({where: {code: bookingId}});
    if (!booking) {
        return promise.reject(errors.invalid_booking_id);
    }
    if (booking.status === 'cancelled') {
        return promise.reject(errors.invalid_booking_cancel);
    } else {

        const query = `WITH book AS (
                            UPDATE booking set status='cancelled' where code = '${bookingId}'
                        ), fc AS (
                        UPDATE flight_chart set total_booked_seats = (total_booked_seats - (select seats_booked from booking 
                            where code ='${bookingId}')) where id=(select flight_chart_id from booking where code ='${bookingId}')
                        returning id
                        ) SELECT id from fc;`
        await db.sequelize.query(query);
        return {bookingId};
    }
};

function uniqueId(stringLength, possible)
{
  stringLength = stringLength || 6;
  possible = possible || "ABCDEFGHJKMNPQRSTUXY";
  var text = "";

  for(var i = 0; i < stringLength; i++) {
    var character = getCharacter(possible);
    while(text.length > 0 && character === text.substr(-1)) {
      character = getCharacter(possible);
    }
    text += character;
  }

  return text;
}

function getCharacter(possible) {
  return possible.charAt(Math.floor(Math.random() * possible.length));
}