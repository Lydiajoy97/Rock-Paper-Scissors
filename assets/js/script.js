// Play game
var rock = 0;
var paper = 1;
var scissors = 2;

var userChoice; 

function handleRock(e) {
  userChoice = rock;
}

function handlePaper(e) {
  userChoice = paper;
}

function handleScissors(e) {
  userChoice = scissors
}

function handlePlay(e) {
  let userChoice = element.addEventListener("click");
  let CPUChoice = Math.random() * (2-0) +1;
  let result = calculateWinner();
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

function calculateWinner(user, CPU) {
if ( userChoice === CPUChoice) {
  result = userChoice, CPUChoice;
}
else if (userChoice === 0 && CPUChoice === 1) {
 result = CPUChoice;
}
else if (userChoice === 1 && CPUChoice === 0) {
 result = userChoice;
}
else if (userChoice === 1 && CPUChoice === 2) {
 result = CPUChoice;
}
else if (userChoice === 2 && CPUChoice === 1) {
 result = userChoice;
 
}
else if (userChoice === 0 && CPUChoice === 2) {
 result = userChoice;
}
else if (userChoice === 2 && CPUChoice === 0) {
  result = CPUChoice;
}
}