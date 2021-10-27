const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/procrasta-date', 
    {
    
    useUnifiedTopology: true
    

}
);

module.exports = mongoose.connection;