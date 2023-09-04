# badchat

This is a simple IRC-like chat application built using Node.js and Socket.IO. It allows users to join a chat room, send messages, and receive notifications when other users join or leave.

## Features

- User registration with username.
- Real-time chat messaging.
- "User has joined" and "User has left" notifications.
- Admin privileges for users with a password.

## Requirements

- [Node.js](https://nodejs.org/) installed on your system.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>

Navigate to the project directory:

bash
Copy code
cd irc-like-chat
Install the required Node.js packages:

bash
Copy code
npm install
Start the server:

bash
Copy code
node server.js
Open your web browser and access the chat application at http://localhost:3000.

Usage
Enter your desired username and click "Join."
Start sending messages in the chat input box.
Other users' messages will appear in the chat window.
You will receive "User has joined" and "User has left" notifications when users join or leave.
Admin Privileges
To gain admin privileges and display a crown emoji next to your username, use the following command:

bash
Copy code
/admin your_password
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
This project is a simplified example inspired by IRC (Internet Relay Chat).
Special thanks to the developers of Node.js and Socket.IO for making real-time communication easier.
