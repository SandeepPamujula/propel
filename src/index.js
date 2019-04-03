// 'use strict';

// const config = require('./config');
// const db = require('./models/sql');
// const app = require('./app');

// db.sequelize.sync()
//     .then(app)
//     .then(app => {
//         app.listen(config.http.port);
//         console.log(`highfly server listening to port ${config.http.port}` );
//         console.log(`node environment  :: ${process.env.NODE_ENV || 'dev'}`);
//     });

'use strict';

switch (process.argv[2]) {
  case 'init':
    require('./console/init')()
    .then(() => console.log('init done'))
    .then(() => process.exit());
    break;

  default:
    require('./console/webserver')();
}
