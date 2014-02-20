// Jesus Yanes
// February 20, 2014
// Wacky Conditional Script

confirm = prompt ("Hi there, random question- Did you have coffee today?");
console.log("Fascinating, I didn't, Can you guess why?");

var coffee = prompt ("Why do you think I didn't have coffee");
console.log("I apologize, I didn't hear you. Something is byting me.");

var username = prompt ("What's your name?");
console.log("Fascinating...");

var reason = prompt ("What brings you to my domain? (Money, Ad, Million Dollars)");
if (reason == "money" || reason == "ad"|| reason == "million dollars"){
    
    console.log("That sucks, the last guy who came by already claimed the money from the ad.")    

} else {
    console.log("Huh, I thought it was the million dollar ad I posted. I was going to give it to you. That's cool.");
}

var sight = prompt ("Well, I have to get going " + username + ". Will I see you again?");