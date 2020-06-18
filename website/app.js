/* Global Variables */
const url = 'https://community-open-weather-map.p.rapidapi.com/weather?units=metric&';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apikey = 'f6a641105amsh3901a1f0f0ca125p1afce6jsnb6d0dd468558';

// GET request info
const reqBodyForGet = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apikey
    }
};
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', main);
/* Function called by event listener */
function main() {
    getOpenWeatherData().then((weatherData) => postOpenWeatherData(weatherData));
}
/* Function to GET Web API Data*/
const getOpenWeatherData = async () => {
    const zip = 'q=' + document.getElementById('zip').value;
    console.log(zip);
    const response = await fetch(url + zip, reqBodyForGet);
    return response.json();
};

/* Function to POST data */
const postOpenWeatherData = async (weatherData) => {
    const user_response = document.getElementById('feelings').value;
    let temperature = '-';
    if (weatherData) {
        console.log(weatherData);
        temperature = weatherData.main.temp.toString() + ' C';
    }

    const data = {
        temperature: temperature,
        date: newDate,
        user_response: user_response
    };
    //  POST request info
    const reqBodyForPost = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    // console.log(JSON.stringify(data));
    const url = 'http://localhost:3000/post';
    console.log('Creating promise');
    const response = await fetch(url, reqBodyForPost);
    try {
        console.log('trying..');
        const result = await response;
        console.log('done\n');
        return result;
    } catch (error) {
        console.log('That is the error: ', error);
    }
};
/* Function to GET Project Data */

// postOpenWeatherData().then((res) => res.text()).then((res) => console.log(res));
