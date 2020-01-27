Everett Houston
'Real Time Chess Game'
January 23rd, 2020

This is a simple Js chess game made utilizing Chess.js(Chess logic library) and Chessboard.js(Chess UI)
https://www.chessboardjs.com/
Which allows players to make & see each others moves in real-time.

Utilizing a Node.js & Express server to host the game.
I implemented Socket.io to the Node server to send & handle client messages.
The Socket.io messages are sent to the server when the player completes their move,
at which point we broadcast it to the clients on the server.

       ********************************************************************************************   
          To Play with hosted app on heroku, copy/paste link into your browser in 2 separate tabs
          to begin playing: https://multiplayerchess3.herokuapp.com/ 
       ********************************************************************************************
   ##Note: You can play with a friend on separate devices if you initiate the game(open the link) at the same time.

To run:
          once respository has been cloned/downloaded to your local system.
          -cd chess

          -npm install (to setup necessary dependencies/ all dependencies are declared
              in .json)

          -node index.js
            to which you should see 'Listening on port 8080'

          -from here you are able to open localhost:8080 in your browser
            simply copy & paste http://localhost:8080/

          -at this point the chessboard and pieces will be displayed in their
            starting state, from here an additional player should open up
            localhost:8080 or if you want to play against yourself you can open 2 tabs

          -the white pieces are given the first move, once a move is made it will
            be displayed in both windows and the black player will be able to make a move.

          -enjoy the game!



Objective:

          My inspiration for taking on this project was to better understand how to
          set up a simple server utilizing Node.js, and integrating/utilizing
          middleware(Express.js). Additionally, I wanted to gain exposure to Socket.io
          as I had watched a tutorial that had used it to create a real-time chat app.
          https://www.youtube.com/watch?v=rxzOqP9YwmM&t=325s

          As I searched for a most robust tutorial, rather a tutorial which I found to be
          more engaging and played to my interests, I came across a lecture which covered
          "Building Real-time Chess with Socket.io" in an approachable, easily digested manner.
          https://www.youtube.com/watch?v=Isfqigjo7fQ
          This came accompanied with a Github tutorial, and the provided image assets to integrate
          as you built alongside.
          https://github.com/dwcares/RealTimeWeb-HOL


Challenges I faced:

          As the tutorial is dated, there have been syntactical and process changes.
          Being that I am fresh to these technologies, I had to sift through documentation
          to better understand how Node.js/Express servers were set up, what the requirements
          to create a basic server were and if I could achieve the desired goal with the provided
          reference material within the tutorial or if it needed to be modified. If it was to be left,
          I wanted to understand it's functionality, if it could be written differently, or if there was
          another way of going about implementing it.


Resources used throughout development:

          ChessBoard & chess logic: https://www.chessboardjs.com/
          Chess pieces: https://commons.wikimedia.org/wiki/Category:PNG_chess_pieces/Standard_transparent

          Real-time Chat App built with Node.js & Socket.io Tutorial:
            https://www.youtube.com/watch?v=rxzOqP9YwmM&t=325s

          Real-time Chess App built with Node.js, Express.js, Socket.io:
            https://www.youtube.com/watch?v=Isfqigjo7fQ

          Accompanying Github, with tutorial documentation:
            https://github.com/dwcares/RealTimeWeb-HOL

          Setting up Websockets with Socket.io:
            https://hackernoon.com/setting-up-web-sockets-with-socket-io-63f1b028fcee

          Full Socket.io client and server example:
            https://gist.github.com/luciopaiva/e6f60bd6e156714f0c5505c2be8e06d8

          Socket.io Documentation #Using-with-Express:
            https://socket.io/docs/#Using-with-Express

          Express.js Documentation:
            https://expressjs.com/en/api.html

          Node.js Documentation:
            https://nodejs.org/docs/latest-v10.x/api/
