const BtnRock = document.getElementById("BtnRock");
const BtnScissors = document.getElementById("BtnScissors");
const BtnPaper = document.getElementById("BtnPaper");
const PlayerCounter = document.getElementById("Player");
const ComputerCounter = document.getElementById("Computer");
const Modal = document.getElementById("myModal");
const ModalTitle = document.getElementById("ModalTitle");
const ModalMessage = document.getElementById("ModalMessage");
const ModalClose = document.getElementById("close");

console.log()

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

function Counter(WinLose){
  let PlayerScore = Number(PlayerCounter.textContent);
  let ComputerScore = Number(ComputerCounter.textContent);
  if (WinLose === "PlayerWin"){
    // PlayerScore = PlayerScore.textContent;
    PlayerScore++;
    PlayerCounter.textContent = PlayerScore;
  }
  if (WinLose === "PlayerLose"){
    // ComputerScore = ComputerScore.textContent;
    ComputerScore++;
    ComputerCounter.textContent = ComputerScore;
  }
  if (WinLose === "Draw"){
    // PlayerScore = PlayerScore.textContent;
    // ComputerScore = ComputerScore.textContent;
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
  if(WinLose = "PlayerWin"){ModalTitle.textContent = "You Win!"}
  else if(WinLose = "PlayerLose"){ModalTitle.textContent = "You Lose!"}
  else {ModalTitle.textContent = "It's a Draw!"}
  ModalMessage.textContent = "The Computer chose " + ComputerChoice;
}

function AddEventListener(){
  BtnRock.addEventListener("click", e => {
    const pick = SetRandom(RandomGen(1,3))
    const WinLose = VictoryHandler("Rock", pick); //so i dont have to call victory handler again and again
    ModalHandler(pick, WinLose);
    Counter(WinLose)
  })
  BtnScissors.addEventListener("click", e => {
    const pick = SetRandom(RandomGen(1,3))
    const WinLose = VictoryHandler("Scissors", pick);
    ModalHandler(pick, WinLose);
    Counter(WinLose);
  })
  BtnPaper.addEventListener("click", e => {
    const pick = SetRandom(RandomGen(1,3))
    const WinLose = VictoryHandler("Paper", pick);
    ModalHandler(pick, WinLose);
    Counter(WinLose);
  })
  ModalClose.addEventListener("click", e => {
    Modal.style.display = "none";
  })
}
AddEventListener()
