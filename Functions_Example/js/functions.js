//Functions - Basic Structure
function outptMsg(){
	console.log("Hello World");
}
var width = 5;
function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	//console.log(area);

}
//to invoc the functioncal
//outptMsg();
console.log(width);
//Functions - Parameters and Arguments
//to call this function
calcArea(30, 20); //placing in 2 arguments
function calcArea(w, h){//these are the storage bins--parameters
	var area = h * w;
	console.log(area);
}
//with one listing
function dogYears(){
	var  age = 4;
	var dogYears = age * 7;
	console.log("Sparky is "+dogYears+" years old.")
}
dogYears();
//with several listings

function dogyears(age){//this in the parenathies holds the parameters-the storage containers
	var dogyears = age * 7;
	console.log("Sparles is "+dogyears+" years olds.")
}
var age1 = 4;
dogyears(age1);//these are the arguments
dogyears(5);//this holds the arguments. So on this line we are passing the 
//"5" to age
dogyears(9);//the age variable is design to store a value 5 or 9 or
//whatever number we pass in or called passing
//Screencast - Returning Values
var total = calcarea(20, 20);

function calcarea(w, h){
	var area = w * h;
	return area;// the function is spitting the info out
}

console.log(total);
//screensact - Anonymous Functions 11-18
//var functionname = function(){
	//this is the code to run

var calcuArea = function(width,height){
	var area1 = width * height;
	return area1;
}
var a = calcuArea(25, 25);

console.log(a);

