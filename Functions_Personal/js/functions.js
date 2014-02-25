// Jesus Yanes
// February 25, 2014
// Functions Personal Assignment

// This script calculate the completion time of a script that will send out bulk emails.

var emails = prompt ("How many emails do you need to send out today?");
var scriptSpeed = prompt ("How many emails does your script send out per minute?");
var emailCap = prompt ("How many emails can your script send out per day?");

var timeToSend = calculateTimeToSend(emails, scriptSpeed, emailCap);

function calculateTimeToSend(email, time, cap){
    if (email < cap){
        timeToSend = email / time; // Calculate the hours it will take to send the bulk email out.
    } else {
        timeToSend = (email / time) * (email / cap); 
    }
    return timeToSend;
}

console.log("It will take aproximatelly " + timeToSend + " hours to send out " + emails + " emails.");