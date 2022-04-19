const BtnRock = document.getElementById("BtnRock");
const BtnScissors = document.getElementById("BtnScissors");
const BtnPaper = document.getElementById("BtnPaper")

function chooseRandom(){
  BtnRock.addEventListener("click", e => {
    let random1 = Math.floor(Math.random() * 3 + 1)
    // console.log(random)
    switch(random1){
      case 1:
        console.log("Rock");
        break;
      case 2:
        console.log("Scissors");
        break;
      case 3:
        console.log("Paper");
        break;
      default:
        console.log(random1);
        break;
    }
  })
  BtnScissors.addEventListener("click", e => {
    let random1 = Math.floor(Math.random() * 3 + 1)
    // console.log(random)
    switch(random1){
      case 1:
        console.log("Rock");
        break;
      case 2:
        console.log("Scissors");
        break;
      case 3:
        console.log("Paper");
        break;
      default:
        console.log(random1);
        break;
    }
  })
  BtnPaper.addEventListener("click", e => {
    let random1 = Math.floor(Math.random() * 3 + 1)
    // console.log(random)
    switch(random1){
      case 1:
        console.log("Rock");
        break;
      case 2:
        console.log("Scissors");
        break;
      case 3:
        console.log("Paper");
        break;
      default:
        console.log(random1);
        break;
    }
  })
  
}
chooseRandom()
