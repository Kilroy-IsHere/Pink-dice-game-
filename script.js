let buttonTwo = document.getElementById('btn2');
buttonTwo.addEventListener('click', diceRoll);

function diceRoll(){
    function randomIntFromInterval(min, max) { // This function will generate a random number between two given numbers (max and min): 1 to 6 here.
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      const rndInt = randomIntFromInterval(1, 6);
      return rndInt;
}

let aaa = diceRoll();
let firstPlayerScore = document.getElementById('scoreone');
firstPlayerScore.insertAdjacentText('beforeend', aaa);
