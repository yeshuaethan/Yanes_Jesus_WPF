// Jesus Yanes
// February 17, 2014

//Check the Login

var username = John123
var password = password1
var Cusername = John12
var Cpassword = password3

    //Variables for login
if(username && password === Cusername && Cpassword){
    //if they match user will get welcome message
    console.log("Welcome, (John123)!")
}else if(username ==+ Cusername){
    console.log("User not found. Try again");
}else{
    //if they do not match it will display error
    console.log("Password does not match our records.");
}
