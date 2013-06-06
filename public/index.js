// var socket = io.connect('http://color.jit.su/');
var socket = io.connect('http://localhost:5000/');

socket.on('connect', function () {
  console.log("Connected!");
});

socket.on('message', function (data) {
  console.log("Message pinged = " + data);
  // $("body").animate({ backgroundColor : data }, 50);
  $("#text").html(data)
            .stop(false, false)
            .animate({ color : data }, 50);

  $(".color-ui-bg:after, .color-ui-bg").stop(false, false)
                   .animate({ backgroundColor : data, borderColor : data });
});
