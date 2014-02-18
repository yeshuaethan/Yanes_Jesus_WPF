// Jesus Yanes
// February 17, 2014

//Check tire pressure

var tirePressure = [22, 24, 19, 22]

    //Time to calculate tire pressure
    //If any tire is lower than 20 you fail inspection
if(tirePressure < 20){
    console.log("The tires pass spec!")
}else{
    //if all tires are more than 20 you pass
    console.log("Get your tires checked out!")
}