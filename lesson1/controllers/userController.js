
var controller ={};

controller.index = function(req, res, next){
        res.render('users');
};

module.exports = controller;