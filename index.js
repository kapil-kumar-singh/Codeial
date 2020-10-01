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

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo')(session);


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


// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); 


// Mongo storeis used to store the session cookie in the db
app.use(session({
    name: "CODEIAL",
    // todo :- change the secret before deployment in production mode
    secret : "blahsomething",
    saveUninitialized : false,
    resave: false,
    cookie: {
        maxAge: (1000*60*2)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled' 
    },
    function(err){
        console.log(err || 'connect-mongodb setup ok');
    }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

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


