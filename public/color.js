/**
 * Color Client Library
 * Implements generic handlers for using the color api.
 * @author Matt Owen
 * @since 2013-06-09
 */

console = console || { log : function () {} };

// Connect to color server
var socket = io.connect('http://color.jit.su:80');

// Display message saying you are connected to the color server
socket.on('connect', function () {
  console.log("[color] connected");
});

// Display message saying you are disconnected to the color server
socket.on('disconnect', function () {
  console.log("[color] disconnected");
});

// Received message from server. Adjust colors accordingly.
socket.on('message', function (data) {
  console.log("[color] received: " + data);

  $(".color-ui-bg").stop(false, false).animate({ backgroundColor : data, borderColor : data });

});
