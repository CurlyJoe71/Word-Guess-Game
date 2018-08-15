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

var guessCounter = document.getElementById('guess-counter');
guessCounter.textContent = numberOfGuesses;

//am I going to need some sort of indexOf to match the position of the userGuess and something else...


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    if (gameBoard.includes(userGuess) || wrongGuesses.includes(userGuess)) {
        alert('You already guessed that one.');
        var audio = new Audio('../assets/soundfiles/Well_Isnt_That_Wizard.mp3');
        audio.play();
    }
    else {
        var audio = new Audio('../assets/soundfiles/Alonsy.mp3');
        audio.play();
    };
    //function to check guess with each letter
    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userGuess) {
            gameBoard[j] = userGuess;
        }
    };
    
    if (!wrongGuesses.includes(userGuess) && !gameBoard.includes(userGuess)) {
        wrongGuesses.push(userGuess);
    };
    
    remainingLetters--;
    numberOfGuesses--;
    console.log(gameBoard);
    console.log(wrongGuesses);
    
    var gameBoardDiv = document.getElementById('game-board');
    gameBoardDiv.textContent = gameBoard.join(' ');
    
    var wrongGuessesDiv = document.getElementById('wrong-guesses');
    wrongGuessesDiv.textContent = wrongGuesses.join(' ');
    
    guessCounter.textContent = numberOfGuesses;
    //If User wins the game...
    if (!gameBoard.includes('_')) {
        var audio = new Audio('../assets/soundfiles/Fantastic.mp3');
        audio.play();
        alert('You win!');
    } else if (numberOfGuesses === 0) {
        alert('You lose');
    }
};