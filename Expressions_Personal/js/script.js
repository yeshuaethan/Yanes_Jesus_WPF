//Jesus Yanes-Fernandez
//February 11, 2014	
//Assignment: Expressions - Expressions_Personal

//Since I'm a gym freak and solely depend on protein shakes, I decided to do a protein powder calculator.
//I need to find out the amount of protein powder needed on a monthly basis.
//I will make a calculator for fitness enthusiast that calculates the amount of protein powder needed on a monthly basis.
//This can probably be used to calculate any brand of protein powder out there.

//Example:
//I will tell you how much protein powder you consume in cups, per months you put in. (You will have convert cups to pounds yourself.)
//Taking into account that there are 4 weeks in a month and also the amount of days in a week that you workout (Example: 5).
//How much protein powder do I need every months?

/*
var dailyConsumption = 1;
var consumptionAmount = 2;
var months = 5;
var amount = 1 * 2;
var monthTotal = (5 * amount) * 2;
var neededPeriod = monthTotal * months;

console.log(neededPeriod);
*/

var weekMonth = 4;

var phrase = "This calculator will help you find out how much protein powder you'll need in a month(s) worth, using the unit of cups.";
alert(phrase);

var months = prompt("How many months do you wish to calculate?");
var workoutDayWeek = prompt ("How many days a week do you workout?");
var dailyConsumption = prompt("How many times a day do you drink your protein shake(s)?");
var amount = prompt("How many scoops of protein powder do you add to your shake(s)?");

var first = dailyConsumption * amount; 
var second = (first * workoutDayWeek) * weekMonth; 
var result = second * months;

var show = "The amount of protein powder you consume in a month(s) is:" + " " + result + " " + "cups";
alert(show);

var message = "If you wish to recalculate, please refresh the web page.";
alert(message);