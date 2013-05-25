$(window).load(function () {
  $("body").animate({ backgroundColor : "black" }, 1000);
});

var socket = io.connect('http://localhost');

socket.on('connect', function () {
  console.log("Connected!");
});

socket.on('message', function (data) {
  $("body").animate({ backgroundColor : data }, 50);
});
