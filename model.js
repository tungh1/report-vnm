var mongoose=require('mongoose');
 
var Otpschema = new mongoose.Schema({
    otp:String,
    branch:String
});

// Exporting our model objects
module.exports = {
    Otpschema
}