var router = require('express').Router();
var userControler = require('../controllers/userController');

router.get('/', userControler.index);

module.exports = router;