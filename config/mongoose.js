//requiring mongoose to set up connection with database
const mongoose = require('mongoose');
//setting up connection
mongoose.connect('mongodb://localhost/codeial_development');


//setting up connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to mongoDb'));
db.once('open', function(){
    console.log('Connected To The Database :: MongoDB');
});

module.exports = db;