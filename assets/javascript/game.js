
// Variables

var wordList = ["BURZUM", "MAYHEM", "DEATH", "GORGOROTH", "NORWAY", "BATHORY", "GOATS"];
var lettersUsed = [];
var wins = 0;
var guessesLeft = 8;

// Functions

function compareUsed(used, guessed) {

}

function compareWord(word, guessed) {

}

function newGame(play) {
  theGame();
}
// Main
// Every time the user presses a key this will run
function theGame() {
  document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);
    // Game Logic      
    if (userGuess === compareUsed(userGuess)) {
      // Shows the game progression and stats
      var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>ties: " + ties + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
    }

    else {
      document.querySelector("#game").innerHTML = "<p> Please only press R, P or S. Thank you!</p>"
    }
  }
}

theGame();
