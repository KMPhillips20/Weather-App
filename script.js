var infoDiv = document.getElementById
var searchBtn = document.querySelector('#search-button');
var weatherInput = document.querySelector('#weather');

 function fetchResults(weather){
 var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        console.log(main);
        console.log(syn);
        console.log(weather);
        displayWeather(data);
        localStorage.setItem(data.name,data.id)
    })
    .catch(function(error){
        console.log(error);
    });
}
    // .then(response => response.json())
    // .then(data => {
    //     var {main, name, syn, weather} = data;
    //     var icon = `https://openweathermap.org/img/wn/${
    //     weather[0]["icon"]
    //   }@2x.png`;
    // })


    
    