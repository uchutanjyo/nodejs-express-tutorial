const path = require('path');

module.exports = path.dirname(require.main.filename);
// this gives us the path to the file that is responsible for the fact that our app is runing