
// Variables

var wordList = ["BURZUM", "MAYHEM", "DEATH", "GORGOROTH", "NORWAY", "BATHORY", "GOATS"];
var lettersUsed = [];
var dashWord = [];
var arrayWord = [];
var wins = 0;
var guessesLeft = 8;
var playGame = true;

console.log(55);
// Functions

function randomWord(wordList) {
  console.log(wordList);
  return(wordList[Math.floor(Math.random() * wordList.length)]);
}

// Checks if the user has guessed the letter before
function compareUsed(used, guess) {
  for(i = 0; i < used.length; i++) {
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
  for(i = 0; i < word.length; i++) {
    if (guess === word.charAt(i)) {
      return(true);
    }
    else {
      return(false);
    }
  }
}

//Make word into an array called playWord
//Make an array of length word.length full of '_' characters
function makeArrays(word) {
  for(i = 0; i < word.length; i++) {
    arrayWord[i] = word.charAt(i);
  }
}


// Main game function.
//Will run every time the user presses a key.
function theGame(word) {

  while(guessesLeft > 0) {
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);
      // Game Logic
      if (compareUsed(lettersUsed, userGuess) === false) {
        lettersUsed.push(userGuess);
        if (compareWord(word, userGuess) === false) {
        guessesLeft--;
        }
        else {

        }
      }
      else {
        document.querySelector("#instruct").innerText = "Choose another letter. Thank you!";
      }

    }
  }

}




//This is the actual game loop.
console.log(wordList[2]);
// while(play game === true) {
  theGame(randomWord(wordList));
  
