const { OtpModel, PhoneModel } = require('./farm-5-db');
const express=require('express');
var router = express.Router();
var request=require('request-promise');

router.get('/sims', async (req, res) => { 
  try {
    const filter = { owner: req.query.owner };
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.limit, 1) || 100;

    const data = await PhoneModel.find(filter).limit(perPage).skip(perPage * (page-1));
    res.send(data);
  } catch (err){
    res.send(err);
  };
    
});



// //update phone
router.post('/updatephone', async (req, res) => {
    var options = {
        uri: "https://smsgatewayprod.vdtsecurity.vn/v2/sims?page=1&limit=10000&brandType=facebook",
        method: "GET",
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDJlMzcxMzQ4MGY0YzAwMjc5ZWY4NWMiLCJpYXQiOjE2ODA5NDQ1NTksImV4cCI6MTY4MjE1NDE1OSwidHlwZSI6ImFjY2VzcyJ9.qevsACREV7qlQAAoval34-bEhcq9C146rzGhOAHOP2U'
          },
        json: true
    }

    var result50k = await request(options);
    result50k.results.forEach(async(element) => {
        console.log(element.msisdn);
        var phone_model = new PhoneModel();
        phone_model.phone_number = element.msisdn;
        phone_model.owner = 'HIE';
        output = await phone_model.save();
    });
    res.send("updated");

});

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
//     const filter = { phone_number: req.query.phone_number, branch_type: req.query.branch_type, status: req.query.status };
//     OtpModel.findOne(filter).then(function(models){
//         res.send(models);
//     }) 
//   } catch (err){
//     res.send(err);
//   };
 
// });

// router.get('/otp/report-123', async (req, res) => {
//     var current_date = new Date().toLocaleDateString();
//     var timestamp = new Date(current_date);
//     const filter = {timestamp: timestamp.getTime()};

//     const data = await OtpModel.aggregate().sortByCount("branch_type");
//     const count_otp = await OtpModel.count(filter);
    
//     var result = "<p>" + new Date() + "</p><p> "+ JSON.stringify(data)  +" </p><p>Total OTP: " + count_otp + "</p>";
//     res.send(result);
    
// });

router.get('/otp/report', async (req, res) => {
  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  const filter = {timestamp: timestamp.getTime()};
  const filter_linkedin = {timestamp: timestamp.getTime(), branch_type: 'LinkedIn'};
  const filter_google = {timestamp: timestamp.getTime(), branch_type: 'Google'};
  const filter_facebook = {timestamp: timestamp.getTime(), branch_type: 'Facebook'};
  const filter_line = {timestamp: timestamp.getTime(), branch_type: 'Line'};
  const filter_bigo = {timestamp: timestamp.getTime(), branch_type: 'Bigo'};
  const filter_discord = {timestamp: timestamp.getTime(), branch_type: 'Discord'};
  const filter_grab = {timestamp: timestamp.getTime(), branch_type: 'Grab'};
  const filter_agoda = {timestamp: timestamp.getTime(), branch_type: 'Agoda'};
  const filter_apple = {timestamp: timestamp.getTime(), branch_type: 'Apple'};
  const filter_kucoin = {timestamp: timestamp.getTime(), branch_type: 'KuCoin'};
  const filter_garmin = {timestamp: timestamp.getTime(), branch_type: 'Garmin'};
  const filter_viber = {timestamp: timestamp.getTime(), branch_type: 'Viber'};

  const lstOtp = await OtpModel.count(filter);
  const count_linkedin_tha = await OtpModel.count(filter_linkedin);
  const count_google_tha = await OtpModel.count(filter_google);
  const count_facebook_tha = await OtpModel.count(filter_facebook);
  const count_line_tha = await OtpModel.count(filter_line);
  const count_bigo_tha = await OtpModel.count(filter_bigo);
  const count_discord_tha = await OtpModel.count(filter_discord);
  const count_grab_tha = await OtpModel.count(filter_grab);
  const count_agoda = await OtpModel.count(filter_agoda);
  const count_apple = await OtpModel.count(filter_apple);
  const count_kucoin = await OtpModel.count(filter_kucoin);
  const count_garmin = await OtpModel.count(filter_garmin);
  const count_viber = await OtpModel.count(filter_viber);
  
  var result = "<b id='farm5' total='" + lstOtp + "'>Farm 5: " + lstOtp + "</b></br>";

  result += "<b>Team Thắng: </b></br>";
  result += "<b style='color:blue'>LinkedIn: <span id='linkedin_5'>" + count_linkedin_tha + "</span></b></br>";
  result += "<b style='color:blue'>Apple: <span id='apple_5'>" + count_apple + "</span></b></br>";
  result += "<b style='color:green;'>Google: <span id='google_5'>" + count_google_tha + "</span></b></br>";
  result += "<b style='color:green'>Facebook: <span id='facebook_5'>" + count_facebook_tha + "</span></b></br>";
  result += "Line: " + count_line_tha + "</br>";
  result += "Bigo: " + count_bigo_tha + "</br>";
  result += "Discord: " + count_discord_tha + "</br>";
  result += "Grab: " + count_grab_tha + "</br>";
  result += "Agoda: " + count_agoda + "</br>";
  result += "Garmin: " + count_garmin + "</br>";
  result += "Viber: <span id='viber_5'>" + count_viber + "</span></br>";
  result += "Kucoin: <span id='kucoin_5'>" + count_kucoin + "</span></br>";

  res.send(result);
  
});

 
module.exports = router;