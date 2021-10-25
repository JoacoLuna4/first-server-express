
// EXAMPLE WHITOUT EXPRESS
/* const http = require('http');
const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(3000, () =>{
    console.log('Server on port 3000')
}) */

const express = require('express');

const app = express();

app.get('/', inicio);
function inicio (pet, res){
    res.send("Hello world");
}
app.get('/contact', contact)
function contact (pet, res){
    res.send("contact page bro")
}
app.listen(3000)


