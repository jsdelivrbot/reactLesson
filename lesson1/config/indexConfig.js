var appConfig = require('./appConfig');
var passportConfig = require('./passportConfig');
module.exports = function(app){
    this.appConfig = new appConfig(app);
    this.passportConfig = passportConfig(app);
    
}