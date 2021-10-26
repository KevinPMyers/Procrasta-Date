const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/procrasta-date', 
    {

}
);

module.exports = mongoose.connection;