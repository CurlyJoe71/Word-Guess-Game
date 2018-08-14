// declaring variables
var wordList = ['tardis', 'companion', 'doctor', 'dalek', 'cyberman', 'silence', 'universe', 'travel', 'hero', 'time', 'history', 'future'];

var answer = [];

var numberOfGuesses = 10;

var wrongGuesses = [];

// function to get random word and convert to array;
secretWordFunction = function() {
    var secretWordArray = [];
    var secretWord = wordList[(Math.floor(Math.random() * wordList.length))];
    secretWordArray = secretWord.split('');
    answer = secretWordArray;
    console.log(answer);
}
secretWordFunction();


var gameBoard = [];
console.log(gameBoard);
for (let i = 0; i < answer.length; i++) {
    gameBoard[i] = "_";
}

var remainingLetters = gameBoard.length;
console.log(gameBoard);

//am I going to need some sort of indexOf to match the position of the userGuess and something else...


document.onkeyup = function(event) {

    var userGuess = event.key;
    //function to check guess with each letter
    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userGuess) {
            gameBoard[j] = userGuess;
        }
    }
    if (!wrongGuesses.includes(userGuess) && !gameBoard.includes(userGuess)) {
            wrongGuesses.push(userGuess);
    }
        
    
    remainingLetters--;
    numberOfGuesses--;
    console.log(gameBoard);
    console.log(wrongGuesses);
    };
    
