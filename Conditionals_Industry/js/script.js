// Jesus Yanes
// February 19, 2014
// Conditionals Industry Assignment

// Assisting with pricing in web design
// Lets get all the information we need to get started including hourly wage, minimum quote, project name, time and costs.

var hourlyWage = prompt("How much would you like to get payed per hour?"); 
var minimumQuote = prompt("What is the minimum quote you will allow to start the project?");
var projectName = prompt("What is the name of this project?"); 
var estimatedTime = prompt("How much time do you estimate you will spend on this project in hours?");
var costs = prompt("And how much money will you be spending on production?");

var quote = hourlyWage * estimatedTime - costs;


if(quote >= minimumQuote){ //Check to see if project meets our minimum standard to get started

    if (quote > 500 ) {
        console.log("It would seem this would be a great project to get started on as soon as possible.");
        console.log("Project Name: " + projectName);
        console.log("Estimated Hours: " + estimatedTime);
        console.log("Estimated Profit: " + quote);
    }