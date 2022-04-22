const BtnRock = document.getElementById("BtnRock");
const BtnScissors = document.getElementById("BtnScissors");
const BtnPaper = document.getElementById("BtnPaper");
const PlayerScore = document.getElementById("Player");
const ComputerScore = document.getElementById("Computer");

let random;

function ChooseRandom(){
  random = Math.floor(Math.random() * 3 + 1)
  switch(random){
    case 1:
      return "Rock"
    case 2:
      return "Scissors"
    case 3:
      return "Paper"
    default:
      return random
  }
}

function AddEventListener(){
  BtnRock.addEventListener("click", e => {
    console.log(ChooseRandom())
  })
  BtnScissors.addEventListener("click", e => {
    console.log(ChooseRandom())
  })
  BtnPaper.addEventListener("click", e => {
    console.log(ChooseRandom())
  })
  
}
AddEventListener()
