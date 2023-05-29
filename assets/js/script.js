const button = document.querySelector(".button");
const scores = document.querySelector(".scores");
let player; 
let computer; 
let score; 

button.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();

}));

function computerTurn(){
    const ranNum = Math.Floor(Math.Random(* 3));
}

function playerTurn(){

}

function winnersScore(){
  if (player == computer){
    return "It's a draw!"
  }
  else if (computer == "Rock"){
    return (player == "Paper") ? "You Won!" : "Too Bad!"
  }
  else if (computer == "Paper"){
    return (player == "Scissors") ? "You Won!" : "Too Bad!"
}
else if (computer == "Scissors"){
    return (player == "Rock") ? "You Won!" : "Too Bad!"
}}
