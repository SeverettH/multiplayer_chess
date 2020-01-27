var board;//UI Object
var game;//Logic object

window.onload = function () {
    initGame();//load game
};

var initGame = function() {//settings for UI
   var cfg = {
       draggable: true,//dragging a piece with the moust is allowed
       position: 'start',//start the board with the pieces in this spot(starting state)
       onDrop: handleMove,//function called when piece is dropped
   };

   board = new ChessBoard('gameBoard', cfg);
   game = new Chess();
};

var handleMove = function(source, target ) {//UI gives source and target and utilizes logic
    var move = game.move({from: source, to: target});//validates move, if not validate will return null

    if (move === null)  return 'snapback';//if move is null, the piece will not be allowed to move & will "snap back" to the position prior to the desired move
};

// setup my socket client
var socket = io();

 // called when a player makes a move on the board UI
 var handleMove = function(source, target) {
     var move = game.move({from: source, to: target});

     if (move === null)  return 'snapback';
     else socket.emit('move', move);//send 'move' message to all connected clients
 };

 // called when the server calls socket.broadcast('move')
socket.on('move', function (msg) {
    game.move(msg);//if clients move is validate, initiate it
    board.position(game.fen()); // fen is the board layout, update board to match game state 
});
