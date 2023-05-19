
const bodyParser=require('body-parser');
const api1 = require('./api1');
const api0 = require('./api0');
const api2 = require('./api2');
const api3 = require('./api3');
const api4 = require('./api4');
const api5 = require('./api5');
const web = require('./web');
//const path = require('path');

const express=require('express');

let port = process.env.PORT || 3000;
const app=express();
  
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());

//app.use('/', web);
//app.use(express.static(path.join(__dirname, 'www')));
app.use('/api/farm-2', api2);
app.use('/api/farm-3', api3);
app.use('/api/farm-4', api4);
app.use('/api/farm-1', api1);
app.use('/api/farm-0', api0);
app.use('/api/farm-5', api5);
app.use('/', web);
//assuming app is express Object.
console.log("Test");