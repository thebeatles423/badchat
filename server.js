const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Store user information
const users = new Map();

// Handle socket.io connections
io.on('connection', (socket) => {
  socket.on('join', (username) => {
    users.set(socket.id, { username });
    io.emit('message', `${username} has joined`);
  });

  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      io.emit('message', `${user.username} has left`);
      users.delete(socket.id);
    }
  });

  socket.on('chatMessage', (message) => {
    const user = users.get(socket.id);
    if (user) {
      io.emit('message', `${user.username}: ${message}`);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
