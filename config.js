'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/dota2lfg';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-dota2lfg';
exports.PORT = process.env.PORT || 3000;
