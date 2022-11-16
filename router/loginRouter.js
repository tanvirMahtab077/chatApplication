var express = require('express');
var router = express.Router();

const {getLogin} = require('../controler/loginControler')

/* GET home page. */
router.get('/', getLogin);

module.exports = router;