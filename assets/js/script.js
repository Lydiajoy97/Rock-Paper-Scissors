// Play game
var rock = 0;
var paper = 1;
var scissors = 2;

var userChoice; 

document.getElementsByClassName("buttons").addEventListener("click", handlePlay);

function handleRock(e) {
  userChoice = rock;
  alert ("you clicked rock");
}

function handlePaper(e) {
  userChoice = paper;
  alert ("you clicked paper");
}

function handleScissors(e) {
  userChoice = scissors
  alert ("you clicked scissors");
}

function handlePlay(e) {
  console.log("User choice is: ${userChoice}" + userChoice);
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
return "You lose! The computer chose ${CPUChoice}"
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