const INPUTS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSOR: 'scissor'
}

const inputs = ['rock' , 'paper' , 'scissor']

const score = {
  human: 0,
  computer: 0
}

let games = 1;


const gameFunction = () => {
  
}

const game = (count, input) => {
  if(games === 6) {
    return
  }
  const computerInput = computerGame()
  console.log(computerInput, input)
    switch(input) {
      case INPUTS.ROCK: 
      if(computerInput === INPUTS.PAPER) {
        score.computer = score.computer + 1  
        document.getElementsByClassName('gameStatus')[0].innerHTML = "You Lose! Paper beats Rock"     
      }
      else if (computerInput === INPUTS.SCISSOR) {
        score.human = score.human + 1  ;
        document.getElementsByClassName('gameStatus')[0].innerHTML = "You Win!  Rock beats SCISSOR "     
      }
      else if (computerInput === INPUTS.ROCK) {
        document.getElementsByClassName('gameStatus')[0].innerHTML = "Tie "     
      }
      break;

      case INPUTS.PAPER: 
      if(computerInput === INPUTS.SCISSOR) {
        score.computer = score.computer + 1 
        document.getElementsByClassName('gameStatus')[0].innerHTML = "You Lose! SCISSOR beats PAPER "      
      }
      else if (computerInput === INPUTS.ROCK) {
        score.human = score.human + 1 ;
        document.getElementsByClassName('gameStatus')[0].innerHTML = "You Win! Paper beats Rock  "      
      }
      else if (computerInput === INPUTS.PAPER) {
        document.getElementsByClassName('gameStatus')[0].innerHTML = " Tie"     
      }
      break;

      case INPUTS.SCISSOR: 
      
      if(computerInput === INPUTS.ROCK) {
        score.computer = score.computer + 1      
        document.getElementsByClassName('gameStatus')[0].innerHTML = "You Lose!  Rock beats SCISSOR "
      }
      else if (computerInput === INPUTS.PAPER) {
        score.human = score.human + 1      
        document.getElementsByClassName('gameStatus')[0].innerHTML = "You Win! SCISSOR beats PAPER " 
      }
      else if (computerInput === INPUTS.SCISSOR) {
        document.getElementsByClassName('gameStatus')[0].innerHTML = "Tie "     
      }
      break;
    }

    document.getElementsByClassName('computerScore')[0].innerHTML = score.computer;
    document.getElementsByClassName('humanScore')[0].innerHTML = score.human;
    document.getElementsByClassName('gamesCount')[0].innerHTML = count;
    games++

    if(games === 6 ) {
      if(score.human>score.computer) {
        document.getElementsByClassName('finalStatus')[0].innerHTML = "Human Wins";
      }
      else if(score.computer>score.human) {
        document.getElementsByClassName('finalStatus')[0].innerHTML = "Computer Wins";
      }
      else {
        document.getElementsByClassName('finalStatus')[0].innerHTML = "Its a tie";
      }
    }
  
}


const computerGame = () => {
  return inputs[Math.floor(Math.random()*inputs.length)];
}



const userInput = (string) => {

  game(games, string)
}