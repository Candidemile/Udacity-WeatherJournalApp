// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// // Cors for cross origin allowance
// const cors = require('cors');
// app.use(cors);
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const listening = () => {
    console.log('The server is running..');
};
app.listen(3000, listening);

/* GET routes */
app.get('/get', function(req, res) {
    res.send(`Here is project data\n: ${Object.entries(projectData)}\n`);
    console.log('GET request is being processed. Sending Project data.');
});

/* POST routes */
app.post('/post', (req, res) => {
    console.log('POST request is being processed. Adding new data to projectData.');
    projectData.temperature = req.body.temperature;
    projectData.date = req.body.date;
    projectData.user_response = req.body.user_response;

    console.log(`${Object.entries(projectData)}`);
});
