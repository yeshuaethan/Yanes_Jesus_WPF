// Jesus Yanes-Fernandez
// February 13, 2014	
// Assignment: Expressions - Expressions_Wacky

// Not to wacky, if you've noticed I'm a fitness freak. So, I decided to make a bodyfat percent calculator
// The formulas below are just approximations. 
// The goal here is to have a point of reference from which to work. 

var first = 125 * 0.732;
var second = 91.5 + 8.987;
var third = 6 / 3.14;
var fourth = 24 * 0.157;
var fifth = 38 * 0.249;
var sixth = 9.5 * 0.434;
var result1 = second + third;
var result2 = result1 - fourth;
var result3 = result2 - fifth;
var leanBodyMass = sixth + result3;
var bodyFatPercent = (bodyWeight - leanBodyMass) * 100 / bodyWeight;