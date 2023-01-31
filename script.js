var town = ""
var apiKey = "0d014af5b06cb6bd943a8ea52f2c56e1"

//  apiKey = "0d014af5b06cb6bd943a8ea52f2c56e1"
//  url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;


var findCity = function () {
    var town = $("#townInput").val();
    localStorage.setItem("town", town);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ town + "$appid=" + apiKey + "&units=imperial";
    fetch(apiUrl)
    .then(function (response){
        if (response.ok) {
            response.json().then(function (data) {
                displayInfo(data);
            });
        }
    })
}

