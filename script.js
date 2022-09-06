var playersScores, roundScore, currentPlayer, dice;
playersScores = [0, 0];
roundScore = 0;
currentPlayer = 0;
dice= 0;

dice = Math.floor(Math.random()*6)+ 1; //I created a 6 faces dice here using both methods 'random' and 'floor' on Math.

console.log('El dado tirado marca un' + ' ' + dice);

document.querySelector('#current-'+currentPlayer).textContent= dice;

var a = document.querySelector('#current-0').textContent;
console.log('player score is ' + ' ' + a);
