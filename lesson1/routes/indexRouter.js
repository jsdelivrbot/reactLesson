var router = require('express').Router();
var homeControler = require('../controllers/homeController');
router.get('/', homeControler.index);

module.exports = router;