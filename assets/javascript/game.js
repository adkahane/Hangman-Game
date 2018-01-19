
// Variables

var wordList = ["BURZUM", "MAYHEM", "DEATH", "GORGOROTH", "NORWAY", "BATHORY", "GOATS"];
var lettersUsed = [""];
console.log(lettersUsed.length);
var dashWord = [];
var arrayWord = [];
var wins = 0;
var guessesLeft = 8;
var playGame = true;

// Functions

function randomWord(wordList) {
  // console.log(wordList);
  return(wordList[Math.floor(Math.random() * wordList.length)]);
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
    if (guess === word.charAt(i)) {
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

//Prints the stats and game to the screen
function updateGame() {
  var html = ""
  return(html);
}


// Main game function.
//Will run every time the user presses a key.
function theGame(word) {
  makeArrays(word);
  console.log(word);
  console.log(arrayWord);
  console.log(dashWord);
  // while(guessesLeft > 0) {
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);
      // Game Logic
      // console.log(lettersUsed);
      if (compareUsed(lettersUsed, userGuess) === true) {
        document.querySelector("#instruct").innerText = "Choose another letter. Thank you!";
        console.log("This letter has been used");
      }
      else {
        document.querySelector("#instruct").innerText = "Good Guess!";
        lettersUsed.push(userGuess);
        console.log(lettersUsed);  
        if (compareWord(word, userGuess) === true) {
          
        }
        else {
          guessesLeft--;
          console.log(guessesLeft);
        }
      }
    }

  // }
  
}




//This is the actual game loop.
// while(playGame === true) {
  theGame(randomWord(wordList));
// }
