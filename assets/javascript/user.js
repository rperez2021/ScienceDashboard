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
          if (currentUser.display.space) {
            $("button[value=space]").trigger("click")
          }
          if (currentUser.display.earthquake) {
            $("button[value=earthquake]").trigger("click")
          }
          if (currentUser.display.airpollution) {
            $("button[value=airpollution]").trigger("click")
          }
          if (currentUser.display.potd) {
            $("button[value=potd]").trigger("click")
          }
          if (currentUser.display.guardian) {
            $("button[value=guardian]").trigger("click")
          }
        }
      })
      // User is signed in.

      database.ref().child("/users/" + user.uid + "/credentials/").set({
        user: user.displayName,
        email: user.email,
        photo: user.photoURL,

      });





      $("#username").text("Welcome! " + user.displayName);
      $("#userphoto").html("<img src='" + user.photoURL + "' class='rounded-circle' width='40' height='40'>");
      console.log(currentUser)
    } else {
      $("#username").text("");
      console.log("User is Signed Out")
    }

  })

}

$('#signout').on("click", function (event) {
  event.preventDefault()
  $("#userphoto").hide();
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
