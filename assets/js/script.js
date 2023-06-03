// Code for const written using tutorial by Ania Kubow

const CPUChoiceDisplay = document.getElementById('cpu-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let CPUChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateCPU()
} ))

// Game variables
var rock = 0;
var paper = 1;
var scissors = 2;


function generateCPU(e) {
 const randomNumber = Math.floor(Math.random() * 3) +1;
 console.log(randomNumber);
}

function getCPUChoice() {
 CPUChoice = generateCPU();
 return CPUChoice;
}

function calculateWinner() {
if ( userChoice === CPUChoice) {
  h4.innerText = "Its a draw!"
}
else if (userChoice === "rock" && CPUChoice === "paper" || userChoice === "paper" && CPUChoice === "scissors" ||
 userChoice === "scissors" && CPUChoice === "rock") {
 h4.innerText = "Too bad!"
 return incrementCPUResult();
}
else if (userChoice === "paper" && CPUChoice === "rock" || userChoice === "scissors" && CPUChoice === "paper" || 
userChoice === "rock" && CPUChoice === "scissors") {
 h4.innerText = "You got it!"
 return incrementScore();
}
}

// This adds a score of 1 to the user or computer depending on who wins. Written using the Love Maths Tutorial.

function incrementScore() {
  let oldScore = parseInt(getElementsById("userChoice").innerText);
  document.getElementsById("userChoice").innerText = ++oldScore;
}

function incrementCPUResult() {
  let CPUOldScore = parseInt(getElementsById("CPUChoice").innerText);
  document.getElementsById("CPUChoice").innerText = ++CPUOldScore;
}