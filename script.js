
var searchBtn = document.querySelector('#search-button');
var weatherInput = document.querySelector('#weather');
var toDay = document.querySelector("#toDay")

//  apiKey = "0d014af5b06cb6bd943a8ea52f2c56e1"
//  url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;
// geo = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
// weekUrl ="api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

var searchedCity = document.getElementById('#search');
var apiKey = "0d014af5b06cb6bd943a8ea52f2c56e1";

function fetchWeather(currentCity) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchedCity + "&limit=5&appid=" + apiKey;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
var handleSearch = function (event) {
        event.preventDefault();
        var currentCity = searchedCity.value.trim();
        fetchWeather(currentCity);
}
