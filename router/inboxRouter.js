var express = require('express');
var router = express.Router();

const {getInbox} = require('../controler/inboxControler')


/* GET home page. */
router.get('/', getInbox);

module.exports = router;