const {OtpModel, PhoneModel} = require('./farm-0-db');
const express=require('express');
var router = express.Router();
var request=require('request-promise');

// router.post('/update', async (req, res) => {
//     const filter = {_id: req.query.id}
//     const doc = await OtpModel.findOneAndUpdate(filter, {status: true}, {
//         new: true,
//         upsert: true
//     });
//     res.send("Data updated!");

// });

// router.get('/otp', function(req, res) { 
//   try {
//     const filter = { phone_number: req.query.phone_number, brand: req.query.brand, status: req.query.status };
//     OtpModel.findOne(filter).then(function(models){
//         res.send(models);
//     }) 
//   } catch (err){
//     res.send(err);
//   };
 
// });

// router.get('/otp/report-123', async (req, res) => {
//     var current_date = new Date().toLocaleDateString();
//     var timeStamp = new Date(current_date);
//     const filter = {timeStamp: timeStamp.getTime()};

//     const data = await OtpModel.aggregate().sortByCount("brand");
//     const count_otp = await OtpModel.count(filter);
    
//     var result = "<p>" + new Date() + "</p><p> "+ JSON.stringify(data)  +" </p><p>Total OTP: " + count_otp + "</p>";
//     res.send(result);
    
// });


router.get('/otp/report', async (req, res) => {

  var current_date = new Date().toLocaleDateString();
  var timeStamp = new Date(current_date);
  console.log(timeStamp.getTime());
  const filter = {timeStamp: timeStamp.getTime()};
  const filter_linkedin = {timeStamp: timeStamp.getTime(), brand: 'LinkedIn'};
  const filter_google = {timeStamp: timeStamp.getTime(), brand: 'Google'};
  const filter_facebook = {timeStamp: timeStamp.getTime(), brand: 'Facebook'};
  const filter_microsoft = {timeStamp: timeStamp.getTime(), brand: 'Microsoft'};
  const filter_line = {timeStamp: timeStamp.getTime(), brand: 'Line'};
  const filter_bigo = {timeStamp: timeStamp.getTime(), brand: 'Bigo'};
  const filter_discord = {timeStamp: timeStamp.getTime(), brand: 'Discord'};
  const filter_grab = {timeStamp: timeStamp.getTime(), brand: 'Grab'};
  const filter_agoda = {timeStamp: timeStamp.getTime(), brand: 'Agoda'};
  const filter_apple = {timeStamp: timeStamp.getTime(), brand: 'Apple'};
  const filter_kucoin = {timeStamp: timeStamp.getTime(), brand: 'KuCoin'};
  const filter_huawei = {timeStamp: timeStamp.getTime(), brand: 'Huawei'};
  const filter_garmin = {timeStamp: timeStamp.getTime(), brand: 'Garmin'};
  const filter_viber = {timeStamp: timeStamp.getTime(), brand: 'Viber'};
  const filter_telegram = {timeStamp: timeStamp.getTime(), brand: 'Telegram'};

  //const data = await OtpModel.aggregate().sortByCount("brand");
  const lstOtp = await OtpModel.count(filter);
  // const count_linkedin_tha = await OtpModel.count(filter_linkedin);
  // const count_line_tha = await OtpModel.count(filter_line);
  // const count_bigo_tha = await OtpModel.count(filter_bigo);
  // const count_discord_tha = await OtpModel.count(filter_discord);
  // const count_grab_tha = await OtpModel.count(filter_grab);
  // const count_agoda = await OtpModel.count(filter_agoda);
  const count_apple = await OtpModel.count(filter_apple);
  const count_kucoin = await OtpModel.count(filter_kucoin);
  //const count_huawei = await OtpModel.count(filter_huawei);
  //const count_garmin = await OtpModel.count(filter_garmin);
  //const count_viber = await OtpModel.count(filter_viber);
  const count_microsoft = await OtpModel.count(filter_microsoft);
  const count_telegram = await OtpModel.count(filter_telegram);
  
  var result = "<p id='farm0' total='" + lstOtp + "'>(" + current_date + "-" + timeStamp.getTime() + ") </br><b>Total</b>: " + lstOtp + " ^tp</b></br>";
  // result += "<b style='color:blue'>LinkedIn: <span id='linkedin_0'>" + count_linkedin_tha + "</span></b></br>";
  result += "<b style='color:blue'>Apple: <span id='apple_0'>" + count_apple + "</span></b></br>";
  result += "Microsoft: " + count_microsoft + "</br>";
  // result += "Line: " + count_line_tha + "</br>";
  // result += "Bigo: " + count_bigo_tha + "</br>";
  // result += "Discord: " + count_discord_tha + "</br>";
  // result += "Grab: " + count_grab_tha + "</br>";
  // result += "Agoda: " + count_agoda + "</br>";
  // result += "Garmin: " + count_garmin + "</br>";
  // result += "Viber: <span id='viber_0'>" + count_viber + "</span></br>";
  result += "Kucoin: <span id='kucoin_0'>" + count_kucoin + "</span></br>";
  result += "Telegram: " + count_telegram + "</p>";

  res.send(result);
  
});
 
module.exports = router;