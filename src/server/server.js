var path = require('path')                  // 1-
const express = require('express');         // 2- Express to run server and routes
const dotenv = require('dotenv');           // 3- For the API key to be encrypted
const bodyParser = require('body-parser');  // 4- Dependencies, to parse data
const cors = require('cors');               // 5- Cors for cross origin allowance
const axios = require('axios');             // 6- To make request to geonames API

let trip = {};

// 2- Start up an instance of app
const app = express();

// 3- configuring API
dotenv.config();

/* Middleware*/
// 4- Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 5- using cors
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist')); //pointing the app to the folder


// 7- Setup Server
const port = 3030;
const server = app.listen(port, listening);

function listening() {
    console.log(`server is running on localhost: ${port}`);
}


/* GET METHOD */
app.get('/', function (request, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

/* POST METHOD */
app.post('/requestData', async (request, response) => {
    response.send(JSON.stringify(trip));
});

app.post('/userInput', async (request, response) => {
    trip.city = request.body.city;
    trip.date = request.body.departDate;
    trip.timeZoneOffset = request.body.timeZoneOffset;

    const temp = await getDataFromGeoNames(request.body.city);
    response.send(JSON.stringify(trip));
});


async function getDataFromGeoNames(city) {
    const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.goeNameUserNAme}`;
    axios.get(url)
        .then(function (response) {
            trip.lng = response.data.geonames[0].lng;
            trip.lat = response.data.geonames[0].lat;
            trip.country = response.data.geonames[0].countryName;

            getWeather(trip.lng, trip.lat);
        })
        .catch(function (error) {
            // handle error
            console.log("ERROR in axios.get(baseURL + city + '&maxRows=3&username=' + username) !!: " + error);
        })

}

async function getWeather(lng, lat) {

    const tempDate = new Date(trip.date)
    const departDate = tempDate.getTime();
    const endDate = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDay();
    const todayDate = new Date().getTime();

    const diff = Math.ceil((departDate - todayDate + trip.timeZoneOffset)/(1000*60*60*24));
    trip.diff = diff;

    
    var url;
    url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.weatherbitAPIkey}`;

    axios.get(url)
        .then(function (response) {

            if(diff < 0) {
                trip.weatherDescription = response.data.data[0].weather.description;
                trip.lowTemp = response.data.data[0].low_temp;
                trip.maxTemp = response.data.data[0].max_temp;
            } else if(diff < 17){
                trip.weatherDescription = response.data.data[diff].weather.description;
                trip.lowTemp = response.data.data[diff].low_temp;
                trip.maxTemp = response.data.data[diff].max_temp;
            } else {
                trip.weatherDescription = response.data.data[15].weather.description;
                trip.lowTemp = response.data.data[15].low_temp;
                trip.maxTemp = response.data.data[15].max_temp;
            }

             getPhoto();
        })
        .catch(function (error) {
            // handle error
            console.log("ERROR in getWeather!!  " + error);
        })
}

async function getPhoto() {

    url = `https://pixabay.com/api/?image_type=photo&key=${process.env.pixabayAPI}&q=${trip.city}`
    axios.get(url)
        .then(function (response) {

            if (response.data.totalHits < 1) {
                trip.imageUrl = 'https://cdn.pixabay.com/photo/2016/11/18/22/14/adventure-1837134_1280.jpg';
            } else {
                var random = Math.floor(Math.random() * 10) + 1;
                trip.imageUrl = response.data.hits[random].webformatURL;
                console.log(JSON.stringify(trip));
            }

        })
        .catch(function (error) {
            // handle error
            console.log("ERROR in getPhoto!!: " + error);
        })
}