var socket = io.connect('http://color.jit.su/');
// var socket = io.connect('http://localhost:5000/');

socket.on('connect', function () {
  console.log("Connected!");
});

socket.on('message', function (data) {
  // $("body").animate({ backgroundColor : data }, 50);
  $("#text").html(data).animate({ color : data }, 50);
});
