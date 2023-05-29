const userChoiceResult = document.getElementById('user-choice')
const computerChoiceResult = document.getElementById('comp-choice')
const result = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userChoice
let player 
let computer

choices.forEach(choice => choice.addEventListener('click', (e) => {})) 

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


function randomComputerChoice() {
    const ranNum = Math.floor (Math.random * 3) + 1
    console.log(ranNum)
}