window.onload = function () {
  userdata();

};
var database = firebase.database();

//This is not final probably jacked up
var userRef = database.ref("/users/");
var user;
var flaguid;
var currentUser = {}
var displayName;



function userdata(user, uid, email, photo, display) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
      database.ref("/users/" +user.uid).once("value").then(function(snapshot){
      var displayName = user.displayName;
      currentUser.name = user.displayName;
      currentUser.uid = user.uid
      currentUser.display = {}
      if (user.display !== {}){
      currentUser.display.space = snapshot.val().display.space;
      currentUser.display.earthquake = snapshot.val().display.earthquake;
      currentUser.display.airpollution = snapshot.val().display.airpollution;
      currentUser.display.potd = snapshot.val().display.potd;
      }
      })
      // User is signed in.
      
      database.ref().child("/users/" + user.uid).set({
        user: user.displayName,
        email: user.email,
        photo: user.photoURL,
        display: {
          //   space: $("#spacecard").toggle("false"),
          //   earthquake: $("#spacecard").toggle("false"),
          //   airpollution: $("#spacecard").toggle("false"),
          //   potd: $("#spacecard").toggle("false")
        }
      });
      console.log(displayName)
      var email = user.email;
      console.log(email)
      var emailVerified = user.emailVerified;
      console.log(emailVerified)
      var photoURL = user.photoURL;
      console.log(photoURL)
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log(uid)
      var providerData = user.providerData;
      console.log(providerData)

      if (currentUser.display.space === true);
        $("#options").attr("space").trigger("click")

      $("#username").text("Welcome! " + displayName);
      $("#userphoto").html("<img src='" + photoURL + "' class='rounded-circle' width='40' height='40'>");
      console.log("User " + displayName + " Is Signed In")
    } else {
      $("#username").text("User is not logged in");
      console.log("User is Signed Out")
    }


  });
}

$('#signout').on("click", function (event) {
  event.preventDefault()
  database.ref()
    .child("/users/" + currentUser.uid)
    .update({
      display: {
        space: ($("#spacecard").is(":visible")),
        earthquake: ($("#earthquakecard").is(":visible")),
        airpollution: ($("#aiqcard").is(":visible")),
        potd: ($("#potdcard").is(":visible"))
      }
    })
    .finally(function () {
      console.log('Signed Out');
      firebase.auth().signOut()
    })
})


function firebaseSave() {
  if ($("#spacecard").toggle(":hidden")) {
    database.ref().child("/users/" + user.uid).update({
      space: ($("#spacecard").is(":hidden")),
    })
  } else if ($("#spacecard").toggle(":visible")) {
    database.ref().child("/users/user" + user.uid).update({
      space: ($("#spacecard").is(":hidden")),
    })
  }
}

// function writeUserData(uid, displayName, email, photoURL) {
//   firebase.database().ref('users/' + uid).set({
//     username: user.displayName,
//     email: user.email,
//     profile_picture : user.photoURL
//   })
// };
console.log(currentUser)
