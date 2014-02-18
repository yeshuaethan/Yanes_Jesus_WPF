// Jesus Yanes
// February 17, 2014

//over 250lbs
//do they qualify?
var CompetitorsWeight = 245;
var miniWeight = 250;

if(CompetitorsWeight > miniWeight){
	//if weight is greater than miniweight you are invited
	console.log("The competitor qualifies for the heavyweight division!");
}else{
	//if weight is less than miniweight you are not invited
		console.log("The competitor needs to gain more weight!");
}
//Last chance for gas. Is there enongh gas to make it 200 miles?
var gasEfficiency = 30;
var GasGauge = .10;
var GasTank = 20;
var Mileage = GasTank * GasGauge * gasEfficiency;
var gallonsofGas = GasTank * GasGauge;
if(Mileage >200 ){
	//If milage is over 200 miles you go without a fillup
	console.log("Yes, you can make it without stopping for gas!");
}else{
	if(gallonsofGas < 6.67);
	//You need more gasoline
	console.log("You only have " +gallonsofGas+" gallons of gas in your tank, better get gas now while you can!" );
}
//Check the login

var username = "billy";
var passcode = "johns";

if(username === "billy" && passcode === "johns"){
	console.log("Welcome,"+username+"!");
}else if (username != "billy" && passcode === "johns"){
		console.log("User not found. Try again");
}else{ 
	if(username === "billy" && passcode != "johns");
		console.log("Password does not match our records.")


}
//Check the tire pressure
var frtrtTire = 32;
var frtltTire = 31;
var rearrtTire = 32;
var rearltTire = 32;


if(frtrtTire == frtltTire && rearrtTire == rearltTire){
	console.log("The tires pass the spec!");
}else{
	console.log("Get your tires checked out!");
}