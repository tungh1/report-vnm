const express=require('express');
var router = express.Router();
const path = require('path');

router.get('/js',function(req,res){
    res.sendFile(path.join(__dirname+'/www/js/index.js'));
    //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/www/index.html'));
    //__dirname : It will resolve to your project folder.
});


module.exports = router;