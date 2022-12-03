var express = require('express');
var router = express.Router();
const upload = require('../middleware/uploadHandler/uploadFile')
const {userValidation,addUserValidationHandler} = require('../middleware/addUserValidation')

const {getUsers,createUser} = require('../controler/usersControler');



/* GET users listing. */
router.get('/', getUsers);
router.post('/create',upload.single('avatar'),userValidation,addUserValidationHandler,createUser)

module.exports = router;
