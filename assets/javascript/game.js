$(document).ready(function(){


// Variables

var wordList = ["BURZUM", "MAYHEM", "DEATH", "GORGOROTH", "NORWAY", "BATHORY", "GOATS"];
var lettersUsed = [""];
var dashWord = [];
var arrayWord = [];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var playGame = true;

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
}

function revealLetter(guess) {
  for(i = 0; i < arrayWord.length; i++) {
    if (guess === arrayWord[i]) {
      dashWord[i] = guess;
    }
  }
}

// Prints the stats and game to the screen
function updateGame() {
  $("#game").html("<p>Wins : " + wins + "</p>");
}

// Resets the Game when you run out of guesses
function youLose() {
  var html = ""
  return(html);
}

// Resets the game when dashWord is fully revealed
function youWin() {
  var html = 
    
    "<p>Wins: " + wins
  
  document.querySelector("#game").innerHTML = html;
}


// Main game function.
// Will run every time the user presses a key.
function theGame(word) {
  debugger;
  makeArrays(word);
  console.log(word);
  console.log(arrayWord);
  console.log(dashWord);
  document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    var keyCode = event.keyCode;
    console.log(userGuess);
    // Game Logic
    // console.log(lettersUsed);
    // if (keyCode >= 65 && keyCode <= 90) {

      if (compareUsed(lettersUsed, userGuess) === true) {
        document.querySelector("#instruct").innerText = "Choose another letter. Thank you!";
        console.log("This letter has been used");
      }
      else {
        document.querySelector("#instruct").innerText = "Good Guess!";
        lettersUsed.push(userGuess);
        console.log(lettersUsed);  
        if (compareWord(arrayWord, userGuess) === true) {
          console.log("You found a letter");
          revealLetter(userGuess);
        }
        else {
          guessesLeft--;
          console.log(guessesLeft);
        }
      }
    
    // else {
    //   document.querySelector("#instruct").innerText = "Please choose a letter";

    // }
    updateGame();
  }

  // if (guessesLeft === 0) {
  //   youLose();
  //   losses++;
  // }
  // else if (dashWord === arrayWord) {
  //   youWin();
  //   wins++;
  //   document.querySelector("#instruct").innerText = "6 YOU WIN 6";
  // }
}



function startGame(){
  theGame(randomWord());
}

//This is the actual game loop.
// while(playGame === true) {
 startGame();
// }
});