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

//generates computers choice

/* function generateCPU() {
  return Math.random() * (2-0) +1;
}*/

//calcutes winner based on if statements

function calculateWinner(user, CPU) {
if ( userChoice === CPUChoice) {
  alert ("It's a Draw!")
  incrementCPUResult();
  incrementScore();
}
else if (userChoice === 0 && CPUChoice === 1) {
 alert("You lose! The computer chose ${CPUChoice} ");
 incrementCPUResult();
}
else if (userChoice === 1 && CPUChoice === 0 ) {
 alert ("Wahoo! you win! The Computer chose ${CPUChoice} and paper covers rock.");
  incrementScore();
}
else if (userChoice === 1 && CPUChoice === 2) {
 alert ("You lose! The computer chose ${CPUChoice}.");
 incrementCPUResult();
}
else if (userChoice === 2 && CPUChoice === 1) {
 alert ("Hooray! You win! The computer chose ${CPUChoice}.");
 incrementScore();
}
else if (userChoice === 0 && CPUChoice === 2) {
  alert("Nice! The Computer chose ${CPUChoice} and rock crushes scissors!");
  incrementScore();
}
else if (userChoice === 2 && CPUChoice === 0) {
  alert ("Too bad... The Computer chose ${CPUChoice} and rock crushes scissors.");
  incrementCPUResult();
}
}