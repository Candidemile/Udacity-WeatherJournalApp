// Personal API Key for OpenWeatherMap API
const apikey = 'f6a641105amsh3901a1f0f0ca125p1afce6jsnb6d0dd468558';
const url = 'https://community-open-weather-map.p.rapidapi.com/weather?units=metric&';

const reqBodyForGet = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apikey
    }
};

// Event listener to add function to existing HTML DOM element
// document.getElementById('generate').addEventListener('click', getOpenWeatherData);
/* Function called by event listener */

/* Function to GET Web API Data*/
const getOpenWeatherData = async () => {
    const response = await fetch(url + 'q=192284', reqBodyForGet);
    return response.json();
};

/* Function to POST data */
const postOpenWeatherData = async (res = {}) => {
    const date = new Date();
    const user_response = 'test_user_response';
    // document.getElementById('feelings').value
    const data = {
        temperature: '30.5 C',
        date: date,
        user_response: user_response
    };
    const reqBodyForPost = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/post', reqBodyForPost);
    return response.json();
};
/* Function to GET Project Data */

// getOpenWeatherData().then((data) => console.log(data));
// postOpenWeatherData();
