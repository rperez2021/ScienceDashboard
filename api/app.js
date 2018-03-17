
function getAQ (){

    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.airvisual.com/v2/city?city=San%20Diego&state=California&country=USA&key=8KdzpGueiSdotpHm9",
        "method": "GET",
        "headers": {}
    }

    //add drop down menu of multiple cities 
    //based on city selection print response data to page 
    
    $.ajax(settings).done(function (response) {
        console.log(response)
       // console.log(response.data.current.pollution)
        console.log(response.data.city)
        
     var city = $("<h1>").text(response.data.city);
    var airQualityIndex = $("<h1>").text("City Air Quality Index:" + " " + response.data.current.pollution.aqius );
    var mainPollutant = $("<h2>").text("Main Pollutant:" + " " + response.data.current.pollution.mainus)
    var PollutantInfo = $("<p>").text("Pollutant Info: p2: ugm3, (pm2.5), p1: ugm3, (pm10), o3: ppb, (Ozone O3), n2: ppb, (Nitrogen dioxide NO2)s2: ppb, (Sulfur dioxide SO2),co: ppm (Carbon monoxide CO)");
    var ForecastHead = $("<h3>").text("Weather Forecast:" + " " ) 
    var WeatherForecast = $("<p>").text("Temperature:" + " " + response.data.current.weather.tp  + "°C" +  " " + "Humidity:" + " " + response.data.current.weather.hu + "%")  
    //var AQIchart = $("<img>").html("src", response.thumb_url); add image (AQI chart)


    $("#city-div").append(city, airQualityIndex, mainPollutant, PollutantInfo, ForecastHead, WeatherForecast)
        
    });
}

$("#select-city").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    
    getAQ()

    
  });
  