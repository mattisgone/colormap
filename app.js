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

// Public
app.use('/public', express.static(__dirname + '/public'));

// Basic page
app.get('/', function (req, resp) {
  resp.render('index.ejs');
});

/* Sample a List
 * @param list an array to sample
 * @param n an integer
 * @return a list of length <n> composed of elements from <list>
 */
function sample (list) {
  return list[Math.floor(Math.random() * list.length)];
}

function sampleN (list, n) {
  if (n === undefined || n < 0)
    n = 1;
  if (!list.length)
    return undefined;
  var results = [];
  for (var k = 0; k < n; k++)
    results.push(list[Math.floor(Math.random() * list.length)]);
  return results;
}

/*
 */
function xo () {
  var color = sample([ "red", "green", "blue" ]);
  io.sockets.send(color);
}

// Xo
setInterval(xo, 500);
