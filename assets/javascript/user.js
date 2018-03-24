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
      var displayName = user.displayName;
      currentUser.name = user.displayName;
      currentUser.uid = user.uid
      database.ref("/users/" + user.uid + "/display/").once("value").then(function (snapshot) {
        currentUser.display = {}
        if (snapshot.val() !== {}) {
          currentUser.display.space = snapshot.val().space;
          currentUser.display.earthquake = snapshot.val().earthquake;
          currentUser.display.airpollution = snapshot.val().airpollution;
          currentUser.display.potd = snapshot.val().potd;
          currentUser.display.guardian = snapshot.val().guardian;
          if (currentUser.display.space === "true") {
            $("button[value=space]").trigger("click")
            console.log("first")

        } else if (currentUser.display.space === true) {
          $("button[value=space]").trigger("click")
            console.log("second")
        }
      }
      })
      // User is signed in.

      database.ref().child("/users/" + user.uid + "/credentials/").set({
        user: user.displayName,
        email: user.email,
        photo: user.photoURL,

      });
      // var email = user.email;
      // console.log(email)
      // var emailVerified = user.emailVerified;
      // console.log(emailVerified)
      // var photoURL = user.photoURL;
      // console.log(photoURL)
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // console.log(uid)
      // var providerData = user.providerData;
      // console.log(providerData)




      $("#username").text("Welcome! " + user.displayName);
      $("#userphoto").html("<img src='" + user.photoURL + "' class='rounded-circle' width='40' height='40'>");
      console.log(currentUser)
      // if (currentUser.display.space === "true") {
      //   $("button[value=space]").trigger("click")
      } else {
        $("#username").text("User is not logged in");
        console.log("User is Signed Out")
      }

  })

  //Trigger Function

  // console.log(currentUser)



}

$('#signout').on("click", function (event) {
  event.preventDefault()
  database.ref()
    .child("/users/" + currentUser.uid + "/display/")
    .update({
      space: ($("#spacecard").is(":visible")),
      earthquake: ($("#earthquakecard").is(":visible")),
      airpollution: ($("#aiqcard").is(":visible")),
      potd: ($("#potdcard").is(":visible")),
      guardian: ($("#guardiancard").is(":visible"))
    })
    .finally(function () {
      console.log('Signed Out');
      firebase.auth().signOut()
    })
})


// function firebaseSave() {
//   if ($("#spacecard").toggle(":hidden")) {
//     database.ref().child("/users/" + user.uid).update({
//       space: ($("#spacecard").is(":hidden")),
//     })
//   } else if ($("#spacecard").toggle(":visible")) {
//     database.ref().child("/users/user" + user.uid).update({
//       space: ($("#spacecard").is(":hidden")),
//     })
//   }
// }

// function writeUserData(uid, displayName, email, photoURL) {
//   firebase.database().ref('users/' + uid).set({
//     username: user.displayName,
//     email: user.email,
//     profile_picture : user.photoURL
//   })
// };