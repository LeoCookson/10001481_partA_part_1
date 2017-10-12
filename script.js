//function 
function ValidateUsername() {
  
    //makes variables, by getting from ID
    let user = document.getElementById('username');
    let pw1 = document.getElementById('password');
    let pw2 = document.getElementById('password2');
    //If usernames / passwords = 0 all fields must be filled
    if (user.value.length == 0) {
        alert("All fields must be filled");
    }
    if (pw1.value.length == 0) {
        alert("All fields must be filled");
    }
    if (pw1.value.length == 0) {
        alert("All fields must be filled");
    }
      
  // if username is less than 8 do this
    if (user.value.length <= 8) {
        alert("Please enter atleast 8 charachters");
        console.log(user)
    } else {
        console.log(user)
        //Calls function ValidatePassword
        ValidatePassword()

    }
    //function to validatePassword
    function ValidatePassword(){
    //Checks passwords are the same
    if (pw1.value == pw2.value) {
        console.log(pw1)
        console.log(pw2)
      
    } else {
        alert("Please make sure both passwords are matching");
    }
   
    }
    if(ans == answer){
        alert("Thanks for signing up.")
    }
}