const path = require('path');
// Gives us the path to the file that is who's responsibility is running our app and exports it
module.exports = path.dirname(require.main.filename);