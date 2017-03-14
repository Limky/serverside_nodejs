//express 는 함수라는 변수.
var express = require('express');
var app = express();
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;
var parser = new xml2js.Parser();
var fs = require('fs');
var mkdirp = require('mkdirp');
var bodyParser = require('body-parser'); //middle ware 
var js2xmlparser = require("js2xmlparser");
var XMLWriter = require('xml-writer');
var xw = new XMLWriter;
var serializer = new (require('xmldom')).XMLSerializer;

var dir = './tmp';

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.post('/setXml',function(req ,res){
//console.log('res body = ',req.body);
 writeXML(JSON.stringify(req.body));
  res.send('Server received XML file.');
});

app.post('/getXml',function(req ,res){
 var text;
 fs.readFile('./config.txt', 'utf8', function(err, data) {
  // the data is passed to the callback in the second argument
  console.log("read = "+data);
  res.send(data);
  });
});



function writeXML(requestBody){
 fs.writeFile('config.txt', requestBody, function (err) {
        if (err) throw err;
        console.log('It\'s saved! in config.txt.');
    });
}

// function  readXML(){
// fs.readFile('./config.txt', 'utf8', function(err, data) {
//   // the data is passed to the callback in the second argument
//   console.log("read = "+data);

// });
// }



//사용자가 웹서버로 접속하는 방법 get,post url을 직접 치고 들어오는 방법 get방식  사용자가 '/' 홈으로 접속시 익명함수 실행됨.
app.get('/',function(req ,res){
  res.send('Hello hompage');
  //console.log();
});

//사용자가 웹서버로 접속하는 방법 get,post url을 직접 치고 들어오는 방법 get방식  사용자가 '/' 홈으로 접속시 익명함수 실행됨.
app.get('/login',function(req ,res){
  res.send('Login please');
  //console.log();
});


app.listen(3000,function(){ //app이 3000번 포트를 바라보게 한다. 성공시 익명함수 실행됨.
  console.log('Connecting 3000 port!');

});


console.log("__dirname : "+__dirname);


/*

    xw.startDocument('1.0');
    xw.startElement('root');

    
    xw.startElement('mode');
      xw.startElement('floor').text("floorvalue");
      xw.endElement();//floor
      xw.startElement('wall').text("wallvalue");
      xw.endElement();//wall
    xw.endElement();//mode

    xw.startElement('depth');
      xw.startElement('minDepth').text("minDepthvalue");
      xw.endElement();//minDepth
      xw.startElement('maxDepth').text("maxDepthvalue");
      xw.endElement();//maxDepth
    xw.endElement();//depth


    xw.endElement();//root
    xw.endDocument();

 console.log(xw.toString()); */