window.onload = function () {
  userdata();

};
var database = firebase.database();

//This is not final probably jacked up
var userRef = database.ref("/users/");
var user;
var flaguid;
var currentUser = {
  // uid: userdata(uid),
  // email: userdata(email),
  // photo: userdata(photo),
  // name: userdata(user),
  // display: {
  //   space: "",
  //   earthquake: "",
  //   airquality:"",
  //   potd:"",
  // }
}
// database.ref("/users/").on("value", function(snapshot) {
//   if (snapshot.child("user").exists()) {
//     console.log("user exists");
//     user = snapshot.val().player1;
//   };
// });
// This is part of the bad stuff

function userdata(user, uid, email, photo, display) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      flaguid = user.uid
      database.ref().child("/users/"+ user.uid).set({
        user: user.displayName,
        email: user.email,
        photo: user.photoURL,
        display:
          {
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
  firebase.auth().signOut().then(function (user) {
    database.ref().child("/users/"+ user.uid).update({
      display:
        {
          space: ($("#spacecard").is(":visible")),
          earthquake: ($("#earthquakecard").is(":visible")),
          airpollution: ($("#aiqcard").is(":visible")),
          potd: ($("#potdcard").is(":visible"))
        }
    });

    console.log('Signed Out');
  }, function (error) {
    console.error('Sign Out Error', error);
  });
});

function firebaseSave(){
  if ($("#spacecard").toggle(":hidden")) {
    database.ref().child("/users/"+ user.uid).update({
      space: ($("#spacecard").is(":hidden")),
  }) 
  } else if 
    ($("#spacecard").toggle(":visible")) {
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
