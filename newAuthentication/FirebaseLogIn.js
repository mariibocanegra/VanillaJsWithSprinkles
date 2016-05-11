var myRef = new Firebase("https://beesprout.firebaseio.com");

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




var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});
// authClient.createUser(email, password, function(error, user) {
//   if (error === null) {
//     console.log("User created successfully:", user);
//   } else {
//     console.log("Error creating user:", error);
//   }
// });
var createUserAction = function(){
  var email = document.getElementById('mail').value;
  var password = document.getElementById('pwd').value;
  var user = document.getElementById('username').value;

myRef.createUser({
  email: email,
  password: password

}, function(error, userData) {

  if(error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid: ", userData.uid);
  }
  });
} //closes createUserAction


// var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});
// authClient.login('password', {
//  email: '<email@domain.com>',
//  password: '<password>'
// });





//Google Authentication:

//if user doesn't have an existing session




// authClient.login('google');


//end of google section
