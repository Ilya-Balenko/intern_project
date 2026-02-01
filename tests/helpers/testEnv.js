const path = require('path');
const dotenv = require('dotenv');

process.env.NODE_ENV = 'test';

dotenv.config({
  path: path.resolve(process.cwd(), '.env.test'),
});
