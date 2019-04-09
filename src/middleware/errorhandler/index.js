'use strict';

const errors = require('../../constants/errors.js');
const config = require('../../config');
const bunyan = require('bunyan');
const logger = bunyan.createLogger(config.logger);
const {get} = require('lodash');

const AppError = require('../errors/AppError');


module.exports = (req, res, next) => {
    res.error = err => {
        const formattedError = isErrorFormated(err) ? err : formatError(err);
        console.log(err);
        if (err && err.stack) {
            logger.error(err.stack);
        } else {
            logger.debug(err);
        }
    
        return res.status(formattedError.httpStatus).json({
            incidentID: 0,
            errorCode: formattedError.errorCode,
            description: formattedError.message
        });
    };
    return next();
};

function isErrorFormated(err) {
    return err instanceof AppError;
}

function formatError(err) {
    if(!err) {
        const  [httpStatus, message, errorCode] = errors.undefined;
        return new AppError(httpStatus, message, errorCode); 
    }
    if (err.name && err.name.indexOf('Sequelize') > -1) {
        return formatValidationError(err);
    }
    
    return errors.undefined;
}
function formatValidationError(err) {
    const firstError = get(err, ['errors', 0], {});
    const  [httpStatus, message, errorCode] = errors.invalid_input_value;
    const description = firstError && typeof firstError.message === 'string' ? firstError.message : message;
    return new AppError(httpStatus, description, errorCode);
}

process.on('uncaughtException', (err) => {
    logger.error(err);
    process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
    logger.error(reason);
    process.exit(1);
});
  