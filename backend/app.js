const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const upload = require('./config/upload');

const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');

const { hostname, port } = require('./constants/constants');
const { dbConnection } = require('./config/db');

dbConnection();

// --- App config
const app = express();

// body-parser
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true}));

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

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});