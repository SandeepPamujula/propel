'use strict';

const crypto = require('crypto');

module.exports = {salt, hash, check};

function salt() {
    return crypto.randomBytes(128).toString('base64');
}

function hash(password, salt) {
    return crypto
            .createHmac('sha512', salt.toString())
            .update(password)
            .digest('base64');
}
function check(password, salt, hashedPassword) {
    return hash(password, salt) === hashedPassword;
}

