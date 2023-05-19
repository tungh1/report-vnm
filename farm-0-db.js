var mongoose=require('mongoose');
var {Otpschema} = require('./model');

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

  console.log("start connection");
const conn = mongoose.createConnection('mongodb+srv://hieuvnm:hieuvnm2023@cluster0.snmbvne.mongodb.net/vnmobile');
const OtpModel = conn.model('report', Otpschema, 'report');

console.log("connection done")
module.exports = {
    OtpModel
};