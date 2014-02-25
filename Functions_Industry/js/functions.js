// Jesus Yanes
// February 25, 2014
// Functions Industry Assignment

// Determine your Compound Interest on your Savings Account

var initialValue = prompt ("Initial amount you deposited in dollars"); // Ask user for the initial amount deposited
var rate = prompt ("Enter the annual rate of interest in decimals"); // Ask user for the annual interest rate
var numberOfYears = prompt ("Enter the number of years the amount has been deposited"); // Ask user for the number of years the amount has been deposited
var compYear = prompt ("Enter the number of times the interest is compounded yearly \n 1 for yearly; 2 for half a yearly; 3 for quarterly; 4 for monthly") // Ask user how many times is the interest rate compounded yearly

if (compYear == 1){ // If componded yearly use this formula
    var compYear = 1
    var cumulative = initialValue * Math.pow( (1+rate/compYear), numberOfYears * compYear); 
console.log ("Your balance after " + numberOfYears + " years is approximately $" + cumulative); // Output for yearly compounded interest
}

if (compYear == 2){ // If compounded twice a year use this formula
    var compYear = 2
    var cumulative = initialValue * Math.pow( (1+rate/compYear), numberOfYears * compYear); 
console.log ("Your balance after " + numberOfYears + " years is approximately $" + cumulative); // Output for half yearly compounded interest
}

if (compYear == 3){ // If compounded quarterly use this formula
    var compYear = 4
    var cumulative = initialValue * Math.pow( (1+rate/compYear), numberOfYears * compYear); 
console.log ("Your balance after " + numberOfYears + " years is approximately $" + cumulative); // Output for quarterly compounded interest
}

if (compYear == 4){
    var compYear = 12
    var cumulative = initialValue * Math.pow( (1+rate/compYear), numberOfYears * compYear); 
console.log ("Your balance after " + numberOfYears + " years is approximately $" + cumulative);
}