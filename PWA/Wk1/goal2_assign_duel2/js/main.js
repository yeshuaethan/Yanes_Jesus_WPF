/*
 * Jesus Yanes-Fernandez
 * 4/3/2014
 * PWA! Duel 2
 */

console.log("test");

//var playerOneName = "Spiderman";
//var playerTwoName = "Batman";
//var playerOneHealth = 100;
//var playerTwoHealth = 100;
//var playerOneDamage = 50;
//var playerTwoDamage = 50;
var round =1;

var p1 = ["Spiderman: ",50,100];
var p2 = ["Batman: ",50,100];


function fight() {
    alert (p1[0] +  p1[2] + " * START * " + p2[0] + p2[2]);
    for(var i=0; i<10; i++)
        {
            var f1 = Math.floor(Math.random()*(p1[1] -25) +10);
            var f2 = Math.floor(Math.random()*(p2[2] -25) +10);

            p1[2] -= f1;
            p2[2] -= f2;

            console.log(p1[0] +  p1[2] + "  " + p2[0] + p2[2])

            var result = winnerCheck();
                console.log(result);
            if (result ==="No Winner"){
                round++;
                alert(p1[0] +  p1[2] + " **Round " + round + " Over** " + p2[0] + p2[2]);
            }else{
                alert (result);
                break;
            };

    };

};
    function winnerCheck(){
        var result = "No Winner";
        if (p1[2] < 1 && p2[2] <1){
            result = "You Both Die";
        }else if(p1[2] < 1){
            result = p2[0] + "WINS !!";
        }else if (p2[2] < 1){
            result = p1[0] + "WINS !!";
        }
       return result;
    }
   fight();