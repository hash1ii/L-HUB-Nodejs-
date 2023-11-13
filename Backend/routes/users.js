var express = require('express');
var router = express.Router();
var topiccontroller=require('../Controller/topiccontroller')



// HOME.....................................................
router.get('/listtopic',topiccontroller.listtopic)

module.exports = router;
