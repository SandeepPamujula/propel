'use strict';

process.env.NODE_ENV = 'testing';

require('../../src/console/init')()
.then(() => console.log('init done'))
.then(() => process.exit());
