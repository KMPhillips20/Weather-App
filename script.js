var searchLocation = document.getElementById('#search');
var apiKey = "d1c520821a4a8826e47929caf6ced52f"

//  apiKey = "d1c520821a4a8826e47929caf6ced52f"
//  url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;
//geo api url = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";



//------ function to use api to get back the location weather ------
function fetchWeather(cityLocation) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchLocation + "&limit=5&appid=" + apiKey;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (info) {
            console.log(info);
        })
        .catch(function (error) {
            console.log(error);
        })
}

var search = function (event) {
    event.preventDefault();
    var cityLocation = searchLocation.value.trim();
    fetchWeather(cityLocation);
}