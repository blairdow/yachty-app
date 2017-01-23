var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
//var usersController = require('../controllers/users');

// api path:
router.get('/api', pagesController.yachty);

module.exports = router;
