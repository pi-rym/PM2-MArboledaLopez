const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'scripts'), 
      'node_modules' 
    ]
  }
};
