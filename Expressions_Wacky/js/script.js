// Jesus Yanes-Fernandez
// February 13, 2014	
// Assignment: Expressions - Expressions_Wacky

// Not to wacky, if you've noticed I'm a fitness freak. So, I decided to make a bodyfat percent calculator
// The formulas below are just approximations. 
// The goal here is to have a point of reference from which to work. 

/*
var first = 125 * 0.732;
var second = 91.5 + 8.987;
var third = 6 / 3.14;
var fourth = 24 * 0.157;
var fifth = 38 * 0.249;
var sixth = 9.5 * 0.434;
var result1 = 100.487 + 1.91;
var result2 = 102.397 - 3.768;
var result3 = 98.629 - 9.462;
var leanBodyMass = 4.123 + 89.167;
var bodyFatPercent = (125 - 93.29) * 100 / 125;

console.log(bodyFatPercent);
*/

var message = "Welcome to the Bodyfat Percentage Calculator. \nBefore you continue please gather the necessary information to continue. \nWeight, Hip Circumference, Waist Circumference, Forearm Circumference, and Wrist Circumference.";
alert(message);

var bodyWeight = prompt("Please enter your Bodyweight in lbs.");
var hip = prompt("Please enter your Hip Circumference in inches.");
var waist = prompt("Please enter your Waist Circumference  in inches.");
var forearm = prompt("Please enter your Forearm Circumference in inches.");
var wrist = prompt("Please enter your Wrist Circumference in inches.");

var first = bodyWeight * 0.732;
var second = first + 8.987;
var third = wrist / 3.14;
var fourth = waist * 0.157;
var fifth = hip * 0.249;
var sixth = forearm * 0.434;
var result1 = second + third;
var result2 = result1 - fourth;