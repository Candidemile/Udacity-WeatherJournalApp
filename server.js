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
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const listening = () => {
    console.log('The server is running..');
};
app.listen(3000, listening);

/* GET routes */
app.get('/all', function(req, res) {
    res.send(projectData);
    console.log('GET request is being processed. Sending Project data.');
});

/* POST routes */
// POST route for adding temperature, date and user response to projectData
app.post('/post', (req, res) => {
    console.log('POST request is being processed. Adding new data to projectData.');
    if (req.body) {
        projectData.temperature = req.body.temperature;
        projectData.date = req.body.date;
        projectData.user_response = req.body.user_response;
    }
    res.send(`project data is updated:\n ${JSON.stringify(projectData)}`);
    console.log(
        `Temperature: ${projectData.temperature}, date: ${projectData.date}, user response: ${projectData.user_response}`
    );
});
