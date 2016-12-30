// Main starting point of the application
const express = require('express');
const http = require('http'); // native node library; works with incoming http requests
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/therabbithole');

// App Setup (getting express working the way we want)
app.use(morgan('combined')); // middleware; logging framework; logs incoming requests / used for debugging
app.use(bodyParser.json({ type: '*/*' })); // middleware; parse incoming requests into json
router(app);

// Server Setup (getting express app to talk to outside world)
const port = process.env.PORT || 3090;
const server = http.createServer(app); // create http server that knows how to receive requests, and anyting that comes in, go ahead and forward to express app
server.listen(port);
console.log('Server listening on:', port);

// nodemon installed: watches project directory; restarts server when any file changes
