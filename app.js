/**
 * Parse Locations Twitter Feeds
 * 
 */

// Frameworks
var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app).listen(process.env.PORT),
    io = require("socket.io").listen(server)
    ; 

// Last color
var colors = [ "#F11E65", "#E0F11E", "#1EF18B", "#1EF1B8", "#F15A1E", "#461EF1", "#1E9AF1", "#8B1EF1", "#1ED1F1" ];
var lastColor = colors[0];

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

/* Sample a List
 * @param list an array to sample
 * @param n an integer
 * @return a list of length <n> composed of elements from <list>
 */
function sample (list) {
  return list[Math.floor(Math.random() * list.length)];
}


/*
 */
function sendColor () {

  // Sample until we get a new color...
  do {
    color = sample(colors);
  } while (lastColor === color);

  lastColor = color;

  io.sockets.send(lastColor);
}

// Xo
setInterval(sendColor, 2000);
