var myRef = new Firebase("https://beesprout.firebaseio.com");

// var email = document.getElementById('mail').value;
// var password = document.getElementById('pwd').value;
// var user = document.getElementById('username').value;




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

var logInAction = function(){
  var email = document.getElementById('mail').value;
  var password = document.getElementById('pwd').value;
  // var user = document.getElementById('usernameNew1').value;
  myRef.authWithPassword({
    email: email,
    password: password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });


}//closes logInAction


//
// var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {});


var createUserAction = function(){
  var email = document.getElementById('mailNew1').value;
  var password = document.getElementById('pwdNew1').value;
  var password2 = document.getElementById('pwdNew2').value;


  //password validation
  if(pwdNew1.value !== pwdNew2.value){
    document.getElementById("pwdValidation").innerHTML = "Passwords don't match.";

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
    } //closes createUserAction -- user account is only made if passwords match.






  }//closes validation














//Google Authentication:

//if user doesn't have an existing session




// authClient.login('google');


//end of google section
