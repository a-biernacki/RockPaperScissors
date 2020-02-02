/*
 * Arianna Biernacki
 * Student ID: xxxxxxxxx
 * SYST10199 - Web Programming
 */

var playAgain = true;
var playerOneWins = 0;
var computerWins = 0;
var gameResult;
var playerOneChoice;

do {
  do{
  var playerOne = prompt("Press 1 for ROCK" + "\n" + "Press 2 for PAPER" + "\n" + "Press 3 for SCISSOR");

  var formattedPlayerOne = parseInt(playerOne);
  } while(formattedPlayerOne !== 1 && formattedPlayerOne !== 2 && formattedPlayerOne !== 3);
  var computer = Math.random() * (3 - 1) + 1;
  var computerRounded = Math.round(computer);

  function evaluateWinner(formattedPlayerOne, computer) {
    switch (formattedPlayerOne) {
      case 1:
          playerOneChoice = "ROCK";
        switch (computer) {
          case 1:
            playerTwoChoice = "ROCK";
            gameResult = "tied.";
            return;
          case 2:
            playerTwoChoice = "PAPER";
            computerWins += 1;
            gameResult = "lost.";
            return;
          case 3:
            playerTwoChoice = "SCISSOR";
            playerOneWins += 1;
            gameResult = "won!";
            return;
          default:
            break;
        }
      case 2:
        playerOneChoice = "PAPER";
        switch (computer) {
          case 1:
            playerTwoChoice = "ROCK";
            playerOneWins += 1;
            gameResult = "won!";
            return;
          case 2:
            playerTwoChoice = "PAPER";
            gameResult = "tied.";
            return;
          case 3:
            playerTwoChoice = "SCISSOR";
            computerWins += 1;
            gameResult = "lost.";
            return;
          default:
            break;
        }
      case 3:
        playerOneChoice = "SCISSOR";
        switch (computer) {
          case 1:
            playerTwoChoice = "ROCK";
            computerWins = computerWins + 1;
            gameResult = "lost.";
            return;

          case 2:
            playerTwoChoice = "PAPER";
            playerOneWins += 1;
            gameResult = "won!";
            return;
          case 3:
            playerTwoChoice = "SCISSOR";
            gameResult = "tied.";
            return;
          default:
            break;
        }
      default:
        break;
    }
  }

  evaluateWinner(formattedPlayerOne, computerRounded);
 
  alert("You picked " + playerOneChoice + ". Computer picked " + playerTwoChoice + ". You " + gameResult + "\n" + "You: " + playerOneWins + "\n" + "Computer: " + computerWins);
  
  playAgain = confirm("Do you want to play again?");
  
} while (playAgain === true);


if(playAgain == false){
  if(playerOneWins > computerWins){
    alert("Player one is the grand winner!");
  }
  else if(computerWins > playerOneWins){
    alert("The computer is the grand winner!");
  } else {
    alert("The game is a tie.");
  }

  document.getElementById("header").innerHTML="Results!";
  document.getElementById("playerOne").innerHTML = "Player One has " + playerOneWins + " wins!";
  document.getElementById("computer").innerHTML = "Computer has " + computerWins + " wins!";
  if(playerOneWins > computerWins){
    document.getElementById("finalWinner").innerHTML="The grand winner is Player one!";
  }
    else if(computerWins > playerOneWins){
    document.getElementById("finalWinner").innerHTML="The grand winner is the computer!";
  } else {
    document.getElementById("finalWinner").innerHTML="The game is a tie - there is no grand winner.";
  }
}
