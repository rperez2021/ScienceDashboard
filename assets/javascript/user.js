window.onload = function() {
    userdata();
    
  };
  var database = firebase.database();

  //This is not final probably jacked up
  var database = firebase.database();
  var userRef = database.ref("/users/");
  var user;
  // database.ref("/users/").on("value", function(snapshot) {
  //   if (snapshot.child("user").exists()) {
  //     console.log("user exists");
  //     user = snapshot.val().player1;
  //   };
  // });
// This is part of the bad stuff

  function userdata(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      //This is jacked up
      database.ref().child("/users/user"+user.uid).set({
        user: user.displayName, 
        email: user.email, 
        photo: user.photoURL, 
        space: false, 
        earthquake: false, 
        airpollution: false, 
        potd: false });
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

      $("#username").text("Welcome! "+ displayName);
      $("#userphoto").html("<img src='"+photoURL+"' class='rounded-circle' width='40' height='40'>");
      console.log("User " + displayName + " Is Signed In")
    } else {
      $("#username").text("User is not logged in");
    console.log("User is Signed Out")
    }
  });
}

$('#signout').on("click", function (event) {
  event.preventDefault()
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
});



// function writeUserData(uid, displayName, email, photoURL) {
//   firebase.database().ref('users/' + uid).set({
//     username: user.displayName,
//     email: user.email,
//     profile_picture : user.photoURL
//   })
// };
