//requiring express
const express = require('express');
const router = require('./routes');

//firing up express
const app = express();

//setting up the port
const port = 9000;

// use expres router
app.use('/', require('./routes/index'));

//creating a listener to firing up the server on port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on the port : ${port}`);
});


