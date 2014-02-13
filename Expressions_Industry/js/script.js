//Jesus Yanes-Fernandez
//February 12, 2014	
//Assignment: Expressions - Expressions_Industry

//Example in comment section below:

//I currently work as an Implementations Engineer. I work on Web Deployments, application upgrades, and code migrations amongst other things.
//Assuming that you can get all the Web Deployments you need done in 2 hrs.
//Typical job has 9-5 work time, 40 hr week work time. (Say there's 4 weeks in a month)
//You take a total of an hour break a day, which sums to 5 hrs a week.
//How many Web Deployments can be finished in a month?

var month = 1;
var workTime = 40;
var breakTime = 5;
var webDeploymentPer = (40 - 5)/2;
var result = webDeploymentPer * 4;

console.log(result);

var weekTime = 40; 

var phrase = "You are working a 40 hour week. How many Web Deployments can be finished in a month(s)?";
alert(phrase);