
// Variables

var wordList = ["BURZUM", "MAYHEM", "DEATH", "GORGOROTH", "NORWAY", "BATHORY", "GOATS"];
var lettersUsed = [];
var dashWord = [];
var playWord;
var wins = 0;
var guessesLeft = 8;

// Functions

function randomWord(wordList) {
  return(wordList[Math.floor(Math.random()*wordList.length())]);
}

// Checks if the user has guessed the letter before
function compareUsed(used, guess) {
  for(i = 1; i < guessed.length(); i++) {
    if (guess === used[i]) {
      return(true);
    }
    else {
      return(false);
    }
  }
}

// Checks if the user's guess is in the current word
function compareWord(word, guess) {
  for(i = 1; i < word.length(); i++) {
    if (guess === word[i]) {
      return(true);
    }
    else {
      return(false);
    }
  }
}

// Main
// Every time the user presses a key this will run
function theGame() {
  for(guessesLeft = 8; guessesLeft > 0; guessesLeft--) {
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);
      // Game Logic
      if (compareUsed(lettersUsed, userGuess) === true) {
        // Shows the game progression and stats
        var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Word: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

      // Set the inner HTML contents of the #game div to our html string
      document.querySelector("#game").innerHTML = html;
      }

      else {
        document.querySelector("#man").innerHTML = "<p> Please only press R, P or S. Thank you!</p>"
      }
    }
  }
}

while(true) {
  randomWord(wordList);
  theGame();
}
