var router = require('express').Router();
var baihocControler = require('../controllers/baihocController');
router.get('/bai1', baihocControler.bai1);
router.get('/bai2', baihocControler.bai2);
router.get('/bai3', baihocControler.bai3);

module.exports = router;