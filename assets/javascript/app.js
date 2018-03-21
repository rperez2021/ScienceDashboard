

var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var users = database.ref("/users/");


$(document).ready(function () {
    $("#spacecard").hide()
    $("#earthquakecard").hide()
    $("#aiqcard").hide()
    $("#potdcard").hide()


$('#options').on("click", ".form-check-input", function (event) {
    var option = $(this).attr("value")
    console.log(option)
    switch(option) {
        case "space":
        $("#spacecard").toggle();
        break;
        case "earthquake":
        $("#earthquakecard").toggle();
        case "airpollution":
        $("#aiqcard").toggle();
        case "potd":
        $("#potdcard").toggle();
    }
    window.dispatchEvent(new Event('resize')); 
});
});

// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email
//       //some more user data
//     });
//   }

//   function getuserID(){
//   //Get the current userID
// var userId = firebase.auth().currentUser.uid;
// //Get the user data
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//     //Do something with your user data located in snapshot
// });
//   }