
$(document).ready(function () {

    //Number of Austronauts in Space
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#spacepeeps').html(number);

    data['people'].forEach(function (d) {
         $('#astronames').append('<li>' + d['name'] + '</li>');
    });
});

//Current Location of ISS
$.getJSON('http://api.open-notify.org/iss-now.json?callback=CALLBACK', function(data) {
    obj = JSON.parse(text)
    var latitude = data["iss_position"].latitude;
    var longtitude = data["iss_position"].longitude
$("#issposition").html(latitude)

});





});