const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('./middleware/logger');
const giphy = require('./routes/giphy');
const doggos = require('./routes/doggos');
require('dotenv').config();

// Variables
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000; 
const app = express();
const server = require('http').Server(app);

// Configure cors
var whitelist = ['http://localhost:3000', 'https://doggo-memory-game-application.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Middleware - 3rd Party
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Secure app by setting http headers
app.use(helmet());
// Compress routes
app.use(compression());
app.use(cors(corsOptions));
// Middleware Routes
app.use('/api/giphy', giphy);
app.use('/api/doggos', doggos);

// Middleware - Custom
app.use(logger);

server.listen(port, () => {
    console.log(`Listening on http://${hostname}:${port}...`);
});