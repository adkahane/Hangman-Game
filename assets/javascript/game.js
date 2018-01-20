$(document).ready(function(){


// Variables

var wordList = ["BURZUM", "MAYHEM", "DEATH", "GORGOROTH", "NORWAY", "BATHORY", "GOATS", "IMMORTAL"];
var lettersUsed = [""];
var dashWord = [];
var arrayWord = [];
var wins = 0;
var losses = 0;
var guessesLeft = 8;

// Functions

function randomWord() {
  // console.log(wordList);
  return (wordList[Math.floor(Math.random() * wordList.length)]);
}

// Checks if the user has guessed the letter before
function compareUsed(used, guess) {
  console.log("checking if letter has been used");
  for(i = 0; i < used.length; i++) {
    if (guess === used[i]) {
      return(true);
    }
  }
}

// Checks if the user's guess is in the current word
function compareWord(word, guess) {
  console.log("checking if letter is in word");
  for(i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      return(true);
    }
  }
}

//Make word into an array called playWord
//Make an array of length word.length full of '_' characters
function makeArrays(word) {
  for(i = 0; i < word.length; i++) {
    arrayWord[i] = word.charAt(i);
  }

  for(i = 0; i < word.length; i++) {
    dashWord[i] = "_";
  }
  $("#wordStats").text(dashWord.join(" "));
}

function revealLetter(guess) {
  for(i = 0; i < arrayWord.length; i++) {
    if (guess === arrayWord[i]) {
      dashWord[i] = guess;
    }
  }
  $("#wordStats").text(dashWord.join(" "));
}

// Prints the stats and game to the screen
function updateGame() {
  $("#game").html("<p>Wins : " + wins + "</p>");
}

// Resets the Game when you run out of guesses
function youLose() {
  $("#loseStats").html("<p>Losses : " + losses + "</p>");
  startGame();
}

// Resets the game when dashWord is fully revealed
function youWin() {
  $("#winStats").html("<p>Wins : " + wins + "</p>");
  startGame();
}

// Hangs the man
function hangman() {
  $("#man").attr("src", "assets/images/hangman_8.jpg");
}

// Main game function.
function theGame(word) {
  makeArrays(word);
  console.log(arrayWord);

  // Main game event "loop"
  document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toUpperCase();
    var keyCode = event.keyCode;
    
    // Game Logic
    if (keyCode >= 65 && keyCode <= 90) {

      if (compareUsed(lettersUsed, userGuess) === true) {
        document.querySelector("#instruct").innerText = "Pick a different letter.";
        console.log("This letter has been used");
      }
      else {
        lettersUsed.push(userGuess);
        $("#letterStats").text(lettersUsed.join(" ").toLowerCase());

        if (compareWord(arrayWord, userGuess) === true) {
          console.log("You found a letter");
          revealLetter(userGuess);
        }
        else {
          guessesLeft--;
          console.log(guessesLeft);
          $("#guessStats").html("<p>Guesses Left : " + guessesLeft + "</p>");
        }
      }
    }
    
    else {
      document.querySelector("#instruct").innerText = "Please choose a letter";
    }

    console.log(guessesLeft);
    if (guessesLeft === 0) {
      losses++;
      youLose();
      document.querySelector("#instruct").innerText = "1 1 1 YOU LOSE 1 1 1";
    }
    console.log(dashWord);
    console.log(arrayWord);
    if (dashWord.join() === arrayWord.join()) {
      wins++;
      youWin();
      document.querySelector("#instruct").innerText = "6 6 6 YOU WIN 6 6 6";
    }
  }
}

// Resets the game
function startGame() {
  hangman();
  guessesLeft = 8;
  lettersUsed = [""];
  dashWord = [];
  arrayWord = [];

  $("#guessStats").html("<p>Guesses Left : " + guessesLeft + "</p>");
  $("#letterStats").text(lettersUsed.join(" "));

  theGame(randomWord());
}

startGame();
});