const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://localhost/${env.db}`);


//setting up connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to mongoDb'));
db.once('open', function(){
    console.log('Connected To The Database :: MongoDB');
});

module.exports = db;