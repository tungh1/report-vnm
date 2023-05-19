const express=require('express');
var router = express.Router();
const path = require('path');

router.get('/jsvnm',function(req,res){
    res.sendFile(path.join(__dirname+'/www/js/index-vnm.js'));
    //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/www/index-vnm.html'));
    //__dirname : It will resolve to your project folder.
});


module.exports = router;