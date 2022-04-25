const BtnRock = document.getElementById("BtnRock");
const BtnScissors = document.getElementById("BtnScissors");
const BtnPaper = document.getElementById("BtnPaper");
const PlayerScore = document.getElementById("Player");
const ComputerScore = document.getElementById("Computer");
const Modal = document.getElementById("myModal");
const ModalTitle = document.getElementById("ModalTitle");
const ModalMessage = document.getElementById("ModalMessage")

function RandomGen(from, to){
  return Math.floor(Math.random() * to + from)
}

function SetRandom(RandGenOutput){
  switch(RandGenOutput){
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

function VictoryHandler(Player, Computer){
  console.log(Computer)
  if (Player === Computer){
    return "Draw"
  }
  else if (Player === "Rock" && Computer === "Paper"){
    return "PlayerLose"
  }
  else if (Player === "Rock" && Computer === "Scissors"){
    return "PlayerWin"
  }
  else if (Player === "Paper" && Computer === "Rock"){
    return "PlayerWin"
  }
  else if (Player === Computer){
    return "Draw"
  }
  else if (Player === "Paper" && Computer === "Scissors"){
    return "PlayerLose"
  }
  else if (Player === "Scissors" && Computer === "Rock"){
    return "PlayerLose"
  }
  else if (Player === "Scissors" && Computer === "Paper"){
    return "PlayerWin"
  }
  else if (Player === Computer){
    return "Draw"
  }
}

function ModalHandler(ComputerChoice, WinLose){
  Modal.style.display = "block";
  ModalTitle.textContent = "You " + WinLose + "!"
  ModalMessage.textContent = "The Computer chose " + ComputerChoice;
}

function AddEventListener(){
  BtnRock.addEventListener("click", e => {
    const pick = SetRandom(RandomGen(1,3))
    ModalHandler(pick, VictoryHandler("Rock", pick));
  })
  BtnScissors.addEventListener("click", e => {
    ChooseRandom()
    ModalHandler(random, VictoryHandler("Scissors", random));
  })
  BtnPaper.addEventListener("click", e => {
    ChooseRandom()
    ModalHandler(random, VictoryHandler("Paper", random));
  })
  
}
AddEventListener()
