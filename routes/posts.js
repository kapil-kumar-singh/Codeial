const express = require('express')
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/posts_controller');

router.post('/create', passport.chechAuthentication, postController.create);
router.get('/destroy/:id', passport.chechAuthentication, postController.destroy);

module.exports = router;