// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 1337;
//
// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//

//express 는 함수라는 변수.
var express = require('express');
var app = express();

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
