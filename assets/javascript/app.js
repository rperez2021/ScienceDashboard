firebase.database().ref("/users/").on('child_added' , function(snapshot) {
});




    // var displayName = snapshot.user.displayName;

    //   database.ref().child("/users/user" + user.uid).set({
    //     user: user.displayName,
    //     email: user.email,
    //     photo: user.photoURL,
    //     display:
    //       {
    //         space: false,
    //         earthquake: false,
    //         airpollution: false,
    //         potd: false
    //       }
    //   });
    //   var email = user.email;
    //   var emailVerified = user.emailVerified;
    //   var photoURL = user.photoURL;
    //   var isAnonymous = user.isAnonymous;
    //   var uid = user.uid;
    //   var providerData = user.providerData;



var database = firebase.database();
var userRef = database.ref("/users/");

// var userId = firebase.auth().currentUser.uid;
// var uid = user.uid;   


$(document).ready(function () {
    $("#spacecard").hide()
    $("#earthquakecard").hide()
    $("#aiqcard").hide()
    $("#potdcard").hide()
    $("#guardiancard").hide()


$('#options').on("click", ".btn", function (event) {
    var option = $(this).attr("value")
    switch(option) {
        case "space":
        var space = $("#spacecard").toggle("slow", function(){
            window.dispatchEvent(new Event('resize'))})
        //    firebaseSave();
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
        case "potd":
        var potd = $("#potdcard").toggle("slow");
        break;
        case "guardian":
        var potd = $("#guardiancard").toggle("slow");
        break;
    }

});

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