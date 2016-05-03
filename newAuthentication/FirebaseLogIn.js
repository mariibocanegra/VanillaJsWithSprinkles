// This script was found on the firebase-simple-login
// my Firebase url
var myRef = new Firebase("https://blinding-fire-9819.firebaseio.com/");


var email = document.getElementById('mail').value;
var user = document.getElementById('username').value;
var password = document.getElementById('pwd').value;



function newAccountDisplay(){
  document.getElementById('newAccountRegister').style.display='';
  document.getElementById('alreadyExists').style.display='none';
  document.getElementById("descript").innerHTML="Sign Up";
}


var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});
authClient.createUser(email, password, function(error, user) {
  if (error === null) {
    console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});


// This script was found on the firebase-simple-login under the "Authentication Providers" then "Email & Password"
// I THOUGHT THIS WOULD OPEN AND ALLOW THE USER TO LOG IN
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});
authClient.login('password', {
 email: '<email@domain.com>',
 password: '<password>'
});

// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
var isNewUser = true;
var myRef = new Firebase("https://blinding-fire-9819.firebaseio.com/");
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
  if (error) {}
  else if (user) {
    if(isNewUser) {
      // save new user's profile into Firebase so we can
      // list users, use them in security rules, and show profiles
      myRef.child('users').child(user.uid).set({
        displayName: user.displayName,
        provider: user.provider,
        provider_id: user.id
      });
    }
  }
  else {}
});


// // perform the login (to Facebook in this case) I THOUGHT THIS WOULD OPEN AND ALLOW THE USER TO LOG IN WITH FACEBOOK
// authClient.login('facebook');


//logging in with facebook
//first, need to sign up for fb for developers
