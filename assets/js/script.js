// Code for const and initial structure written using youtube tutorial by Ania Kubow

const CPUChoiceDisplay = document.getElementById('cpu-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let CPUChoice

//function each time you click 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateCPU();
calculateWinner();
sound();
handleTimeout();
} ))

// plays the sound effect when a button is clicked 
function sound(e) {
  var audio = new Audio('assets/js/sound_effect.wav');
    audio.play();
}
console.log(sound)
//to draw the computer generated number

function generateCPU(e) {
 const randomNumber = Math.floor(Math.random() * 3) +1;
 console.log(randomNumber);
 if (randomNumber === 1){
  CPUChoice = "rock"
 }
 if (randomNumber === 2){
  CPUChoice = "paper"
 }
 if (randomNumber === 3){
  CPUChoice = "scissors"
 }
 CPUChoiceDisplay.innerHTML = CPUChoice
}

// if statements to calculate winner and display results tally

function calculateWinner() {
  document.getElementById("rock");
  document.getElementById("paper");
  document.getElementById("scissors");

if (userChoice === CPUChoice) {
  result = `Draw! You both get a point...`

  document.getElementById("cpu-score").innerText ++;
  document.getElementById("user-score").innerText ++;
}
else if (userChoice === "rock" && CPUChoice === "paper" || userChoice === "paper" && CPUChoice === "scissors" ||
 userChoice === "scissors" && CPUChoice === "rock") {
 result = `Computer won this round with ${CPUChoice}...`

 document.getElementById("cpu-score").innerText ++;
}
else if (userChoice === "paper" && CPUChoice === "rock" || userChoice === "scissors" && CPUChoice === "paper" || 
userChoice === "rock" && CPUChoice === "scissors") {
 result =`Computer chose ${CPUChoice}! You won this round! Wahoo!`

 document.getElementById("user-score").innerText ++;
}
resultDisplay.innerHTML = result
}

let myTimeOut = handleTimeout(alert, 15000);

/*
function handleTimeout() {
   setTimeout(function() {
    alert("Game Over! Thanks for playing! Refresh to play again.");
   }, 10000);
  }

function myStopFunction() {
  clearTimeout(myTimeOut);
  refreshButton.addEventListener('click', calculateWinner());
}
*/