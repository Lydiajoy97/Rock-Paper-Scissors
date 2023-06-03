// Code for const written using tutorial by Ania Kubow

const CPUChoiceDisplay = document.getElementById('cpu-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let CPUChoice
let score = 0 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateCPU();
calculateWinner();
drawScore();
} ))

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

function calculateWinner() {
if ( userChoice === CPUChoice) {
  result = `Draw!`
}
else if (userChoice === "rock" && CPUChoice === "paper" || userChoice === "paper" && CPUChoice === "scissors" ||
 userChoice === "scissors" && CPUChoice === "rock") {
 result = `Computer chose ${CPUChoice}... Better luck next time...`

 document.getElementById("cpu-score").innerText ++;
}
else if (userChoice === "paper" && CPUChoice === "rock" || userChoice === "scissors" && CPUChoice === "paper" || 
userChoice === "rock" && CPUChoice === "scissors") {
 result =`Computer chose ${CPUChoice}! You won! Wahoo!`

 document.getElementById("user-score").innerText ++;
}
resultDisplay.innerHTML = result
}


