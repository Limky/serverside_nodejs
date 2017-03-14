var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function(req, res){
    res.send('hello homepage');
});

app.get('/login',function(req,res){
    res.send('<h1>login please</h1>');
});
app.get('/router',function(req,res){
    res.send('<h1>hello router</h1>,<img src="/aboutme.jpg">');
});


app.listen(3000,function(){
    console.log('Connected 3000 port!');
})

console.log("Hello Nodejs")
