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
// Ask how wide is the room
var widthOfRoom = prompt ("How wide is the room?");
// Get the hight of the room
var heightOfRoom =prompt ("How high is the room");
// Get the total of the room
var total = calcArea(widthOfRoom, heightOfRoom);
}

// Else if statement does not equal blue
else if(color != "red"){
// Ask how wide is the room
var widthOfRoom = prompt ("How wide is the room?");
// Get the hight of the room
var heightOfRoom =prompt ("How high is the room");
// Get the total of the room
var total = calcArea(widthOfRoom, heightOfRoom);
}

// Set the function
// There are 3456 skittles per sq foot
function calcArea (widthOfRoom, heightOfRoom) {
// Calculating the area for the room W/H
	var area = widthOfRoom * heightOfRoom * 3456;
// Calculating the total area and multiplying it by 3456
	return area;
}

