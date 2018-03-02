const path = require('path');
const glob = require('glob');

module.exports = {
  entry: glob.sync('./data/web/js/*.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'tmp')
  }
};