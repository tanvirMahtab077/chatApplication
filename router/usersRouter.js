var express = require('express');
var router = express.Router();
const upload = require('../middleware/uploadHandler/uploadFile')

const {getUsers,createUser} = require('../controler/usersControler')


/* GET users listing. */
router.get('/', getUsers);
router.post('/create',upload.single('avatar'),createUser)

module.exports = router;
