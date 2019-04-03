'use strict';

const errors = require('../../constants/errors.js');
const config = require('../../config');
const bunyan = require('bunyan');
const logger = bunyan.createLogger(config.logger);
const {get} = require('lodash');


module.exports = (req, res, next) => {
    res.error = err => {
        const formattedError = isErrorFormated(err) ? err : formatError(err);
        if (err && err.stack) {
            logger.error(err.stack);
        } else {
            logger.debug(err);
        }
      
        return res.status(formattedError[0]).json({
            incidentID: 0,
            errorCode: formattedError[0],
            description: formattedError[1]
        });
    };
    return next();
};

function isErrorFormated(err) {
    return err && (err.length === 2);
}

function formatError(err) {
    if(!err) {
        return errors.undefined;
    }
    if (err.code && errors[err.code]) {
        // a standart error defined in constants
        return errors[err.code];
    }
    if (err.name && err.name.indexOf('Sequelize') > -1) {
        return formatValidationError(err);
    }
    
    return errors.undefined;
}
function formatValidationError(err) {
    const firstError = get(err, ['errors', 0], {});
    const formattedError = errors.invalid_input_value;
    const statusCode = formattedError[0];    
    const description = firstError && typeof firstError.message === 'string' ? firstError.message : formattedError[1];
    return [statusCode, description];
}