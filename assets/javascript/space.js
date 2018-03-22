
$(document).ready(function () {
    var googleapikey = "AIzaSyCnMtwXlm_cUPd1bBv7AvkBmemTgj-5PYQ";
    var googleurl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
    var latitude;
    var longitude;

    //Leaflet Map Setup
    var mymap = L.map('mapid').setView([0, 0], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/rperez2021/cjevofzsd1mga2rlqgbc7ylnv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnBlcmV6MjAyMSIsImEiOiJjamV2bzJmb3AwamN5MnhtanNjdDVqbjYzIn0.NkORqU3lDjX4B2hnqtW8Vw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 4,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicnBlcmV6MjAyMSIsImEiOiJjamV2bzJmb3AwamN5MnhtanNjdDVqbjYzIn0.NkORqU3lDjX4B2hnqtW8Vw'
    }).addTo(mymap);
    var ISSIcon = L.icon({
        iconUrl: 'assets/images/issicon2.png',
        iconSize: [50, 30],
        iconAnchor: [25, 15],
        popupAnchor: [50, 25],
        shadowUrl: 'assets/images/issicon2_shadow.png',
        shadowSize: [60, 40],
        shadowAnchor: [30, 20]
    });
    var iss = L.marker([0, 0], { icon: ISSIcon }).addTo(mymap);
    var isscirc = L.circle([0, 0], 1500e3, { color: "#2200e3", opacity: 0.3, weight: 1, fillColor: "#e9f469", fillOpacity: 0.1 }).addTo(mymap);



    function moveISS() {
        $.getJSON('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json', function (data) {
            var lat = data['iss_position']['latitude'];
            var lon = data['iss_position']['longitude'];

            iss.setLatLng([lat, lon]);
            isscirc.setLatLng([lat, lon]);
            mymap.panTo([lat, lon], animate = true);
            var fullurl = googleurl + lat + ',' + lon + '&key=' + googleapikey
            $("#latlong").html("Latitude: " + lat + " Longtitude: " + lon);
            //Implement Google Reverese Location API
            $.getJSON(fullurl, function (data) {
                if (data.status === "ZERO_RESULTS" || data.results[0].formatted_address === undefined) {
                    $("#cityconvert").html("Currently Over a Remote Area")
                } else {
                    $("#cityconvert").html("Currently Over: " + data.results[0].formatted_address)
                }
            });
        });
        setTimeout(moveISS, 10000);
    }

    moveISS();

    //Number of Austronauts in Space
    $.getJSON('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json', function (data) {
        var number = data['number'];
        $('#spacepeeps').html("<h3>There are currently " + number + " people in space:</h3>");

        data['people'].forEach(function (d) {
            $('#astronames').append('<ul><i class="fas fa-rocket"></i><a href="https://en.wikipedia.org/wiki/' + d['name'] + '">' + d['name'] + '</a></ul>');
        });
    });

});