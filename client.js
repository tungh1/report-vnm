
const bodyParser=require('body-parser');

const api0 = require('./api0');

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
app.use('/api/farm-0', api0);

app.use('/', web);
//assuming app is express Object.
console.log("Test");