// Jesus Yanes
// February 24, 2014
// Functions Worksheet

var total = calcuArea(5, 6);
function calcuArea(w, h){
	var area = w * h;
	return area;
}

console.log("The area of a rectangle is "+total)

// Circumference of a Circle

var circumf = cumArea(8, 3.14159265); //the argument area
function cumArea(a,p){ //the storage bin area--the parameters
	var area = a * p; //the calculation
	return area; //this is the function that puts out the info
}
console.log("The circumference of the circle is "+circumf)

// Stung Project

var Stings = BeeStings(185, 8.6666667);