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
document.getElementById('dice-roll').addEventListener('click', function(){
    dice = Math.floor(Math.random()*6)+ 1; //I created a 6 faces dice here using both methods 'random' and 'floor' on Math.
    console.log('El dado tirado marca un' + ' ' + dice);

    var img1 = document.getElementById('1.png');
    var img2 = document.getElementById('2.png');
    var img3 = document.getElementById('3.png');
    var img4 = document.getElementById('4.png');
    var img5 = document.getElementById('5.png');
    var img6 = document.getElementById('6.png'); //These are the dice's faces in png which now belong to a variable respectively.

    var imagesArr= [img1, img2, img3, img4, img5, img6];
    imagesArr[0].style.display = "none";
    imagesArr[1].style.display = "none";
    imagesArr[2].style.display = "none";
    imagesArr[3].style.display = "none";
    imagesArr[4].style.display = "none";
    imagesArr[5].style.display = "none"; //We avoid initially all of the .png to show as we need the logic to decide according to the dice's result.

    if(dice == 1){ //The logic will decide which .png will be shown acxcording to the result, letting it show by setting the style.display to "block".
        imagesArr[0].style.display = "block";
    }
    
    else if(dice == 2){
        imagesArr[1].style.display = "block";
    }
        
    else if(dice == 3){
        imagesArr[2].style.display = "block";
    }
    
    else if(dice == 4){
        imagesArr[3].style.display = "block";
    }
    
    else if(dice == 5){
        imagesArr[4].style.display = "block";
    }
    
    else(dice == 6){
        imagesArr[5].style.display = "block";
    }

    if (dice !== 1){ //As long as dice never shows 1, current player will cumulate points, adding the dice's result each time; showing the roundScore on the current score of the active player.
        roundScore += dice;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    }

    else {
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

    }
}
);

//

document.querySelector('#current-'+currentPlayer).textContent= dice;

var a = document.querySelector('#current-0').textContent; //I saved into variable "a" the current dice score for the first player whom div's id is current-0.
console.log('El resultado del jugador es ' + ' ' + a); 

