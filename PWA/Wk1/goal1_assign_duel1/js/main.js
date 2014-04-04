/*
 * Jesus Yanes-Fernandez
 * 4/3/2014
 * PWA! Duel 1
 */

console.log("test");

var playerOneName = "Spiderman: ";
var playerTwoName = "Batman: ";
var playerOneHealth = 100;
var playerTwoHealth = 100;
var playerOneDamage = 50;
var playerTwoDamage = 50;
var round =1;


function fight() {
    alert (playerOneName +  playerOneHealth + " * START * " + playerTwoName + playerTwoHealth);
    for(var i=0; i<10; i++)
        {
            var f1 = Math.floor(Math.random()*(playerOneDamage -25) +10);
            var f2 = Math.floor(Math.random()*(playerTwoDamage -25) +10);

            playerOneHealth -= f1;
            playerTwoHealth -= f2;

            console.log(playerOneName +  playerOneHealth + "  " + playerTwoName + playerTwoHealth)

            var result = winnerCheck();
                console.log(result);
            if (result ==="No Winner"){
                round++;
                alert(playerOneName +  playerOneHealth + " **Round " + round + " Over** " + playerTwoName + playerTwoHealth);
            }else{
                alert (result);
                break;
            };

    };

};
    function winnerCheck(){
        var result = "No Winner";
        if (playerOneHealth < 1 && playerTwoHealth <1){
            result = "You Both Die";
        }else if(playerOneHealth < 1){
            result = playerTwoName + "WINS!!";
        }else if (playerTwoHealth < 1){
            result = playerOneName + "WINS!!";
        }
       return result;
    }
   fight();