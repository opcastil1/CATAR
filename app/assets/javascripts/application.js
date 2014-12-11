

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require websocket_rails/main
//= require_tree .



var dispatcher = new WebSocketRails('localhost:3000/websocket');


dispatcher.on_open = function(data) {
  console.log('Connection has been established: ', data);
  // You can trigger new server events inside this callback if you wish.

}

