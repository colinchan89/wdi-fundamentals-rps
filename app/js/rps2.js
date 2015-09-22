function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    
    playerMove = move || getInput();

    return playerMove;
}

function getComputerMove(move) {

    computerMove = move || randomPlay();

    return computerMove;
}

function getWinner(playerMove,computerMove) {
    
    if (playerMove === computerMove) {
        winner = "tie";
        } else if (playerMove === "rock") {
            if (computerMove === "paper") {
                winner = "computer";
            } else {
                winner = "player";
            }
        }
        else if (playerMove === "paper") {
           if (computerMove === "scissors") {
               winner = "computer";
            } else {
               winner = "player";
            }
        }
        else if (playerMove === "scissors") {
            if (computerMove === "rock") {
                winner = "computer";
           } else {
               winner = "player";
          }
        }
    return winner;
}
function playToFive() {
    console.log('Let\'s play Rock Paper Scissors');
     var playerWins = 0;
     var computerWins = 0;
  
    while (playerWins < 5 && computerWins < 5) {
        getWinner(getPlayerMove(),getComputerMove());
        if (winner === "player") {
            playerWins += 1;
            console.log("Player Wins. Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins+ "\n")
        } else if (winner === "computer") {
            computerWins += 1;
            console.log("Computer Wins. Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        } else {
            console.log("Tie. Both players chose " + playerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins+ "\n");
        }
    }
    return [playerWins, computerWins];
}

playToFive();