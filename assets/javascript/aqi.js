var city = "san diego"

function scrubber(input) {
    console.log(typeof(input))
    input.trim()
    input.replace(" ", "%20")
    if (!alpha(input)) {
        return false
    } else {
        return input
    }

    // https://www.w3resource.com/javascript/form/letters-numbers-field.php
    // Function to check letters and numbers
    function alpha(inputtxt) {
        var letterNumber = /^[a-zA-Z\s]+$/;
        if (inputtxt.match(letterNumber)) {
            return true;
        } else {
            alert("message");
            return false;
        }
    }

}

function getAQ(city) {


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/http://api.airvisual.com/v2/city?city=" + city + "&state=California&country=USA&key=8KdzpGueiSdotpHm9",
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
        var airQualityIndex = $("<h1>").text("City Air Quality Index:" + " " + response.data.current.pollution.aqius);
        var mainPollutant = $("<h2>").text("Main Pollutant:" + " " + response.data.current.pollution.mainus)
        var PollutantInfo = $("<p>").text("Pollutant Info: p2: ugm3, (pm2.5), p1: ugm3, (pm10), o3: ppb, (Ozone O3), n2: ppb, (Nitrogen dioxide NO2)s2: ppb, (Sulfur dioxide SO2),co: ppm (Carbon monoxide CO)");
        var ForecastHead = $("<h3>").text("Weather Forecast:" + " ")
        var WeatherForecast = $("<p>").text("Temperature:" + " " + response.data.current.weather.tp + "°C" + " " + "Humidity:" + " " + response.data.current.weather.hu + "%")
        var AQIchart = $("<img>").html("src", "assets/images/AQI_Values.png");


        $("#city-div").append(city, airQualityIndex, mainPollutant, PollutantInfo, ForecastHead, WeatherForecast)
        $("#chart-div").append(AQIchart)

    });
}




$("#select-city").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    $("#city-div").empty()
    $("#chart-div").empty()
    // var city = $("#city-input").val()
    var city = "san diego"
    city = scrubber(city)
    if (!city) {
        console.log("User passed in bad input")
    } else {
        getAQ(city)
    }
});

