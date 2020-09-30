// requiring express
const express = require('express');

// requiring express
const cookieParser = require('cookie-parser');

//firing up express
const app = express();

//setting up the port
const port = 9000;

//requiring configuration for setting up the database to be accessed by mongoose
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());

//for using static files
app.use(express.static('./assets'));

//requiring express-ejs-layouts
const expresLayout = require('express-ejs-layouts');
// use express layouts
app.use(expresLayout);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true); 


// use expres router
app.use('/', require('./routes/index'));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); 

//creating a listener to firing up the server on port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on the port : ${port}`);
});


