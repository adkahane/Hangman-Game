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
  
  for(i = 0; i < used.length; i++) {
    if (guess === used[i]) {
      return(true);
    }
  }
}

// Checks if the user's guess is in the current word
function compareWord(word, guess) {
  
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

// Resets the Game and updates stats when you run out of guesses
function youLose() {
  $("#loseStats").html("<p>Losses : " + losses + "</p>");
  startGame();
}

// Plays audio and updates stats when user wins
function youWin() {
  var audio = new Audio('assets/audio/mayhemdeathcrush.mp3');
  audio.play();
  $("#winStats").html("<p>Wins : " + wins + "</p>");
  $("#man").attr("src", "");
  startGame();
}

// Hangs the man
function hangman() {
  switch (guessesLeft) {
    case 7:
      $("#man").attr("src", "assets/images/hangman_1.jpg");
      break;
    case 6:
      $("#man").attr("src", "assets/images/hangman_2.jpg");
      break;
    case 5:
      $("#man").attr("src", "assets/images/hangman_3.jpg");
      break;
    case 4:
      $("#man").attr("src", "assets/images/hangman_4.jpg");
      break;
    case 3:
      $("#man").attr("src", "assets/images/hangman_5.jpg");
      break;
    case 2:
      $("#man").attr("src", "assets/images/hangman_6.jpg");
      break;
    case 1:
      $("#man").attr("src", "assets/images/hangman_7.jpg");
      break;
    case 0:
      $("#man").attr("src", "assets/images/hangman_8.jpg");
      break;
    default:
      break;
  }
}

// Main game function.
function theGame(word) {
  makeArrays(word);

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
          revealLetter(userGuess);
        }
        else {
          guessesLeft--;
          hangman();
          
          $("#guessStats").html("<p>Guesses Left : " + guessesLeft + "</p>");
        }
      }
    }
    
    else {
      document.querySelector("#instruct").innerText = "Please choose a letter";
    }

    if (guessesLeft === 0) {
      losses++;
      youLose();
      document.querySelector("#instruct").innerText = "1 1 1 YOU LOSE 1 1 1";
    }

    if (dashWord.join() === arrayWord.join()) {
      wins++;
      youWin();
      document.querySelector("#instruct").innerText = "6 6 6 YOU WIN 6 6 6";
    }
  }
}

// Resets the game
function startGame() {
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