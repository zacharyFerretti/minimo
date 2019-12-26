document.addEventListener("DOMContentLoaded", () => {
  var i = setInterval(function() {
    if (document.getElementsByClassName("shortcut").length != 0) {
      clearInterval(i);
      var request = new XMLHttpRequest();
      request.open(
        "Get",
        "http://api.openweathermap.org/data/2.5/weather?q=Boston,us&APPID=YOURKEY",
        true
      );
      request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data);
        var weatherType = data.weather[0].main;
        if (weatherType == "Clouds") {
          weatherType = "cloudy";
        } else if (weatherType == "Thunderstorm") {
          weatherType = "stormy";
        } else if (weatherType == "Drizzle") {
          weatherType = "drizzly";
        } else if (weatherType == "Rain") {
          weatherType = "rainy";
        } else if (weatherType == "Snow") {
          weatherType = "snowy";
        } else if (weatherType == "Clear") {
          weatherType = "sunny";
        }

        /*document.getElementById("weather").innerHTML =
          "In Boston it is " +
          Math.round(data.main.temp * (9 / 5) - 459.67) +
          "° and " +
          weatherType;*/
        document.getElementById("weather").innerHTML =
          "It's  " +
          Math.round(data.main.temp * (9 / 5) - 459.67) +
          "° and " +
          weatherType +
          " in Boston";
      };
      request.send();
    }
  }, 100);
});

/*
  function weatherBalloon( cityID ) {
  var key = '{yourkey}';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBallon( 6167865 );
}
*/
