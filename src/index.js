
const http = require('http')
const path = require('path')

const express = require('express');
const socketio = require('socket.io')();

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

io.on('connection', socket => {
    console.log('new user connected');
});

//settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io)

//starting files
app.use(express.static(path.join(__dirname, 'public')));

// staring the server
server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


/*
const app = require('./app');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio.listen(server);
require('./sockets')(io);
require('./database');

async function main() {
  await server.listen(app.get('port'));
  console.log(`server on port ${app.get('port')}`);
}

main();
*/