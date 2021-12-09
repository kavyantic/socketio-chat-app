//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require('http');
const server = http.createServer(app);
const { Server }  = require("socket.io");
const io = new Server(server);





app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




///////////////////////////////////Requests Targetting all Articles////////////////////////

app.route("/")

.get(function(req, res){
    res.render('home')
  
})

.post(function(req, res){

  data = {
    title: req.body.title,
    content: req.body.content}
  

})

.delete(function(req, res){

  
});





server.listen(3000, function() {
  console.log("Server started on port 3000");
});


io.on('connection', (socket) => {
  socket.on('chatMessage', (msg) => {
    io.emit('serverMessage', msg); // This will emit the event to all connected sockets
 console.log(msg);
  });
});