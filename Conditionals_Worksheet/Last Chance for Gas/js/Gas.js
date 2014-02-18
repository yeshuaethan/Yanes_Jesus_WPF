// Jesus Yanes
// February 17, 2014

//Last Chance for Gas

var gasEff = 15
var gasRead = .50
var tankcomp = 17
var distance = 200
    //Calculate how much gas we have
if(tankcomp / gasRead * gasEff > distance){
    //If gas in tank is lower than distance left we should stop to get gas
    console.log("Yes, you can make it without stopping for gas!")
}else{
    //if more than distance traveled we better stop for gas
    console.log("You only have 10 gallons of gas in your tank, better get gas now while you can!")
}