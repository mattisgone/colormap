/**
 * HTTP + WebSocket for ColorMap
 * Implements color protocol
 * @author Matt Owen
 * @since 2013-06-08
 */

// Frameworks
var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app).listen(process.env.PORT),
    io = require("socket.io").listen(server)
    ; 

// Custom libs
var colors = require("./colors");

// Public
// app.use(express.bodyParser());
app.use('/public', express.static(__dirname + '/public'));
app.use(express.favicon(__dirname + '/public/favicon.ico', { maxAge: 2592000000 }))

// Base page
app.get('/', function (req, resp) {
  console.log(lastColor);
  resp.render('map.ejs', { color: lastColor, lastColor : lastColor });
});

// Show new color
app.get('/color', function (req, resp) {
  resp.render('index.ejs', { lastColor : lastColor });
});

// Display the map
app.get('/map', function () {
});

app.get('/geometry', function (req, resp) {
  resp.render('geometry.ejs', { key : "xxx", secret : "yyy" });
});

app.get('/geometry', function (req, resp) {
  resp.render('client', { key : "xxx", secret : "yyy" });
});

// Send a new color every 2 seconds...
setInterval(function () {
  io.sockets.send(colors.next());
}, 2000);
