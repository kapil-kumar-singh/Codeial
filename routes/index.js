//requiring express
const express = require('express');

// reuireing the express Router
const router = express.Router();

const homeController = require('../controllers/home_controller');

// adding the message to check that router is loaded
console.log('Router is loaded')

router.get('/', homeController.home);

// for any further routes , access from here
// router.use('/routerName', require('./routerFile'));
router.use('/users', require('./users'));


// export the router 
module.exports = router;