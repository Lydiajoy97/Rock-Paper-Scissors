// Game variables
var rock = 0;
var paper = 1;
var scissors = 2;

function handleRock(e) {
  userChoice = rock;
  return userChoice;
}

function handlePaper(e) {
  userChoice = paper;
  return userChoice;
}

function handleScissors(e) {
  userChoice = scissors
  return userChoice;
}

Button.addEventListener("click", compareCPUVsUser);

function randomChoice(e) {
  var randomChoice = Math.floor(Math.random() * (0-2) +1);
}

function getCPUChoice() {
 var CPUChoice = randomChoice();
 return CPUChoice;
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

// This adds a score of 1 to the user or computer depending on who wins. Written using the Love Maths Tutorial.

function incrementScore() {
  let oldScore = parseInt(getElementsById("userChoice").innerText);
  document.getElementsById("userChoice").innerText = ++oldScore;
}

function incrementCPUResult() {
  let CPUOldScore = parseInt(getElementsById("CPUChoice").innerText);
  document.getElementsById("CPUChoice").innerText = ++CPUOldScore;
}