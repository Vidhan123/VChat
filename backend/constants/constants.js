const path = require('path');
const dotEnv = require('dotenv');

const parsedEnv = dotEnv.config({
  path: path.join(__dirname, '../.env'),
});

// if (parsedEnv.error) throw parsedEnv.error;

const hostname = process.env.HOST || 'localhost';

const port = process.env.PORT || 9000;

const DBUrl = process.env.DB_CONNECTION_URL';

module.exports = {
  hostname,
  port,
  DBUrl,
};
