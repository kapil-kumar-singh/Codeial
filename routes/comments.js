const express = require('express')
const router = express.Router();
const passport = require('passport');

const commentController = require('../controllers/comments_controller');

router.post('/create', passport.chechAuthentication, commentController.create);
router.get('/destroy/:id', passport.chechAuthentication, commentController.destroy);

module.exports = router;