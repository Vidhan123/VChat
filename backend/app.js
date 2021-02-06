const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const upload = require('./config/upload');

const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const chatRouter = require('./routes/chat');
const Chat = require('./models/chat');
const User = require('./models/users');

const { hostname, port } = require('./constants/constants');
const { dbConnection } = require('./config/db');

// --- App config
const app = express();

// body-parser
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true }));

// File upload
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(
  multer({
    storage: upload.storage,
    fileFilter: upload.fileFilter,
  }).single('file')
);

// --- Routes
app.use(userRouter);
app.use(profileRouter);
app.use(chatRouter);

const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  }
});

dbConnection();

io.on('connection', socket => {
  socket.on('Input Chat Message', async (msg) => {
   try {
      const msgSender = await User.findOne({email: msg.email})
      let chat;

      if(msg.grpMsg === false) {
        chat = new Chat({
          chatMessage: msg.chatMessage,
          sender: msgSender._id,
          senderName: msgSender.name,
          senderEmail: msgSender.email,
          type: msg.type,
          grpMsg: msg.grpMsg,
          roomId: msg.roomName,
        });
      }
      else if(msg.grpMsg === true) {
        chat = new Chat({
          chatMessage: msg.chatMessage,
          sender: msgSender._id,
          senderName: msgSender.name,
          senderEmail: msgSender.email,
          type: msg.type,
          grpMsg: msg.grpMsg,
          grpId: msg.grpId,
        });
      }

      chat.save((err, doc) => {
        if(err) console.log(err);
        Chat.find({'_id': doc._id})
            .populate('sender')
            .exec((err, doc) => {
              return io.emit('Output Chat Message', doc)
            })
      });
   } catch(error) {
    console.log(error);
   }
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});