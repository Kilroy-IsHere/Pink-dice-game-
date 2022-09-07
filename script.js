//VARIABLES AND DIVS

var playersScores, roundScore, currentPlayer, dice;
playersScores = [0, 0];
roundScore = 0;
currentPlayer = 0;
dice= 0;
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
document.getElementById('total-0').textContent= '0';
document.getElementById('total-1').textContent= '0'  //Every single variable and <div> concerning scores are set to zero('0' as string for <div> content).

//DICE

dice = Math.floor(Math.random()*6)+ 1; //I created a 6 faces dice here using both methods 'random' and 'floor' on Math.

console.log('El dado tirado marca un' + ' ' + dice);

//

document.querySelector('#current-'+currentPlayer).textContent= dice;

var a = document.querySelector('#current-0').textContent; //I saved into variable "a" the current dice score for the first player whom div's id is current-0.
console.log('El resultado del jugador es ' + ' ' + a); 

