'use strict';

var HttpStatus = require('http-status-codes');
const BASE_ERROR_CODE = 1000;
module.exports = {
    undefined: [HttpStatus.INTERNAL_SERVER_ERROR, 'Internal server error', BASE_ERROR_CODE + 1 ],
    invalid_input_value: [HttpStatus.BAD_REQUEST, 'Validation error', BASE_ERROR_CODE + 2],
    invalid_booking_id: [HttpStatus.BAD_REQUEST, 'Invalid booking Id', BASE_ERROR_CODE + 3],
    invalid_booking_cancel: [HttpStatus.BAD_REQUEST, 'Booking is already cancelled', BASE_ERROR_CODE + 4]
};