// Game variables
var rock = 0;
var paper = 1;
var scissors = 2;

function handleRock(e) {
  userChoice = rock
}

function handlePaper(e) {
  userChoice = paper
}

function handleScissors(e) {
  userChoice = scissors
}

function handlePlay() {
 Button.addEventListener("click");
 console.log(userChoice);
 CPUChoice = generateCPU();
}

function generateCPU(e) {
 CPUChoice = Math.floor(Math.random() * (0-2) +1);
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