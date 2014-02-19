// Jesus Yanes
// February 17, 2014
// Conditionals Personal Script

var username = prompt("Hello there, please enter your name.");
var distance = prompt("Hello " + username + ". How many miles are your driving to work today?");
var speed = prompt("How many miles per hour would you say you are driving?");

if (speed > 60){
    speed = speed / 60;
    }

var timeLeftToWork = prompt("How many hours do you have until work?");
var traffic = confirm("And would you say traffic is a bit rough today?");

var timeOfTrip = speed * distance / 60;

// Double estimated travel time if traffic is bad.
if (traffic === true){
    traffic = traffic*2;
}

if (timeOfTrip > 0){
    if (timeOfTrip <= timeLeftToWork){
        console.log
    } else {
        console.log(username + ", your are going to be late for work.");
    }