const express = require('express');
const http = require('http'); // Native Node library, for low level HTTP requests
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // Forward HTTP requests to express application
server.listen(port);

console.log(`Server listening on ${port}`);