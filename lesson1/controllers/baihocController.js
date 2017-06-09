
var controller ={};

controller.bai1 = function(req, res, next){
        res.render('bai1');
};

controller.bai2 = function(req, res, next){
    res.render("bai2");
};

controller.bai3 = function(req, res, next){
    res.render("bai3");
};

module.exports = controller;