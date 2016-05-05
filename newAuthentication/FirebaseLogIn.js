var email = document.getElementById('mail').value;
var password = document.getElementById('pwd').value;
var user = document.getElementById('username').value;


function newAccountDisplay(){
  document.getElementById('newAccountRegister').style.display='';
  document.getElementById('alreadyExists').style.display='none';
  document.getElementById("descript").innerHTML="Sign Up";
}


function alreadyExistsDisplay(){
  document.getElementById('newAccountRegister').style.display='none';
  document.getElementById('alreadyExists').style.display='';
  document.getElementById("descript").innerHTML="Sign In";
}

var myRef = new Firebase("https://beesprout.firebaseio.com");


var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});
authClient.createUser(email, password, function(error, user) {
  if (error === null) {
    console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});

// var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});
// authClient.login('password', {
//  email: '<email@domain.com>',
//  password: '<password>'
// });


// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
// var isNewUser = true;
// var myRef = new Firebase("beesprout.firebaseapp.com");
// var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
//   if (error) {}
//   else if (user) {
//     if(isNewUser) {
//       // save new user's profile into Firebase so we can
//       // list users, use them in security rules, and show profiles
//       myRef.child('users').child(user.uid).set({
//         displayName: user.displayName,
//         provider: user.provider,
//         provider_id: user.id
//       });
//     }
//   }
//   else {}
// });
//



//Google Authentication:

//if user doesn't have an existing session




// authClient.login('google');


//end of google section
