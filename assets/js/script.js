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
  console.log("User choice is: rock" + userChoice);
  let CPUChoice = generateCPU();
}

function generateCPU() {
  return Math.random() * (2-0) +1;
}

function calculateWinner(user, CPU) {
// if statements here
if ( userChoice === CPUChoice) {
  return "It's a Draw!"
}
else if (userChoice === 0 && CPUChoice === 1) {
 return "You lose! The computer chose ${CPUChoice} "
}
else if (userChoice === 1 && CPUChoice === 0 ) {
  "Wahoo! you win! The Computer chose ${CPUChoice} and paper covers rock."
}
else if (userChoice === 1 && CPUChoice === 2) {
return "You lose! The computer chose ${CPUChoice} "
}
else if (userChoice === 2 && CPUChoice === 1) {
 return "Hooray! You win! The computer chose ${CPUChoice}."
}
else if (userChoice === 0 && CPUChoice === 2) {
  return "Nice! The Computer chose ${CPUChoice} and rock crushes scissors!"
}
else if (userChoice === 2 && CPUChoice === 0) {
  return "Too bad... The Computer chose ${CPUChoice} and rock crushes scissors."
}
}