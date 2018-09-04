var express = require('express');
var request = require('request');
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');

var app = express();

//  Example 1
// var url = "http://google.com";
// request(url , function(err,res,body){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(body);
//     }
// })


// Example 2
// var page = fs.createWriteStream("./pages/google.html")
// var url = "http://google.com";
// request(url).pipe(page);

//Example 3
var page = fs.createWriteStream("./pages/google2.html")
var url = "http://google.com";
request(url)
.pipe(page)
.on('finish',function(){
    console.log('done');
})
.on('error',function(err){
    console.log(err);
})



var port ="8000";
app.listen(port);
console.log('server is listening on '+port);