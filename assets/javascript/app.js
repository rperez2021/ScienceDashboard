

var database = firebase.database();
var userRef = database.ref("/users/");


$(document).ready(function () {
    $("#spacecard").hide()
    $("#earthquakecard").hide()
    $("#aiqcard").hide()
    $("#potdcard").hide()


$('#options').on("click", ".btn", function (event) {
    var option = $(this).attr("value")
    console.log(option)
    switch(option) {
        case "space":
        var space = $("#spacecard").toggle("slow", function(){
            window.dispatchEvent(new Event('resize'))})
           
            // database.ref().child("/users/user" + user.uid).update({
            //     display:
            //       {
            //         space: ($("#spacecard").is(":visible")),
            //       } 
            //   });
        break;
        case "earthquake":
        var earthquake = $("#earthquakecard").toggle("slow");
        break;
        case "airpollution":
        var airpollution = $("#aiqcard").toggle("slow");
        break;
        case "potd":
        var potd = $("#potdcard").toggle("slow");
        break;
    }
    console.log("is it visible?"+$("#spacecard").is(":visible"))
    console.log("is it hidden?"+$("#spacecard").is(":hidden")) 
});
console.log("is it visible?"+$("#spacecard").is(":visible"))
console.log("is it hidden?"+$("#spacecard").is(":hidden"))
});


$('.btn').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
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