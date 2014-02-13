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

var first = bodyWeight * 0.732; // Multiply your bodyweight by 0.732. Bodyweight x .0732 = first.
var second = first + 8.987; // Add the result (first) to 8.987. first + 8.987= second.
var third = wrist / 3.14; // Divide your wrist circumference by 3.14. Wrist divided by 3.14 = third.
var fourth = waist * 0.157; // Multiply your waist measurement by 0.157. Waist x 0.157 = fourth.
var fifth = hip * 0.249; // Multiply your hip measurement by 0.249. Hip x 0.249 = fifth.
var sixth = forearm * 0.434; // Multiply your forearm measurement by 0.434. Forearm x 0.434 = sixth.
var result1 = second + third; // Add results second & third. Result second + Result third = result1.
var result2 = result1 - fourth; // Subtract result1 from fourth. result1 - fourth = result2.
var result3 = result2 - fifth; // Subtract result2 from fifth. result2 - fifth = result3.
var leanBodyMass = sixth + result3; // Add sixth and result3. The result is your lean body mass (your fat free weight) sixth + result3 = leanBodyMass.
var bodyFatPercent = (bodyWeight - leanBodyMass) * 100 / bodyWeight; // Subtract your bodyweight from your leanBodyMass. Once you get the result, multiply that number by 100. Once you get this result, divide it by your bodyweight. Bodyweight-Lean Body Mass) x 100) divided by your bodyweight, gives you you total body fat percent.

var show = "Your total Bodyfat Percent is:" + " " + bodyFatPercent; // This alert will show the final bodyfat percent.
alert(show);

var message = "What categorie do you fall under? \nBody-Fat % Categories \nEssential % of Fat 10 - 13% \nTypical Athlete 14 - 20 \nPhysically Fit 21 - 24 \nAcceptable 25 - 31 \nObese 32% or more";
alert(message); // This message shows the different bodyfat categories you can fall under.

var message = "If you wish to calculate again, please refreash page.";
alert(message); // Message simply tells the user to refresh page in order to recalculate.