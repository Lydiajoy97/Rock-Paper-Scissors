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
  console.log("User choice is: " + userChoice);
  let CPUChoice = generateCPU();
}

function generateCPU() {
  return Math.random() * (2-0) +1;
}

function calculateWinner(user, CPU) {

}