// Jesus Yanes
// February 25, 2014
// Functions Wacky Assignment

// We are going to find out how many skittles are needed to fill an entire room from top to bottom.

// Ask what color the end user prefers
var message = "Welcome to the Skittles Factory";
alert(message);
var message = "We are going to find out how many skittles are needed to fill your entire room";
alert(message);
var color = prompt ("What color do you prefer more, red or blue?")// Finding the amount of skittles  to fill the entire area of a room!

// If statement blue
if(color == "blue"){

var widthOfRoom = prompt ("How wide is the room?");

var heightOfRoom =prompt ("How high is the room");

var total = calcArea(widthOfRoom, heightOfRoom);
}