'use strict';

module.exports = {
    http: {
        port: process.env.HTTP_PORT || 3000
    },
    sql: {
        database: process.env.SQL_DATABASE || 'flyhigh',
        username: process.env.SQL_USERNAME || 'root',
        password: process.env.SQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: 'postgres',
        enableLogging: false
    },
    logger: {
        name: 'flyhigh',
        src: true,
        streams: [
          {
            stream: process.stdout,
            level: 'trace'
          }
        ]
    }
};