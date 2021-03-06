const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./config/db');
const config = require('./config/config');

// Get our API routes
const apiRouter = require('./routes');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
if (app.get('env') === 'production') {
	app.use(express.static(path.join(__dirname, '/../client')));	
}
else{
	app.use(express.static(path.join(__dirname, '/../dist/client')));	
}


// Set our api routes
app.use('/api', apiRouter());


// Catch all other routes and return the index file
app.get('*', (req, res) => {
	if (app.get('env') === 'production') {
  		res.sendFile(path.join(__dirname, '/../client/index.html'));
  	}
  	else{
  		res.sendFile(path.join(__dirname, '/../dist/client/index.html'));
  	}
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || config.port;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));