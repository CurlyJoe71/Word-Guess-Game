// declaring variables
var wordList = ['tardis', 'companion', 'doctor', 'dalek', 'cyberman', 'silence', 'universe', 'travel', 'hero', 'time', 'history', 'future'];

var answer = [];

var numberOfGuesses = 10;

var wrongGuesses = [];

var gameBoardDiv = document.getElementById('game-board');

var wrongGuessesDiv = document.getElementById('wrong-guesses');

var gameBoard = [];

var secretWordArray = [];

var guessCounter = document.getElementById('guess-counter');

var gameInit = document.getElementById('game-init');

var wins = 0;

var losses = 0;

var specialFont = document.getElementById('special-font');

// function to get random word and convert to array;
var secretWordFunction = function() {
    wrongGuesses = [];
    gameBoard = [];
    var secretWord = wordList[(Math.floor(Math.random() * wordList.length))];
    secretWordArray = secretWord.split('');
    answer = secretWordArray;
    for (let i = 0; i < answer.length; i++) {
        gameBoard[i] = "_";
    };
};

var fontColorChangeGood = function() {
    specialFont.style.color = "hsla(271, 100%, 61%, 0.74)";
    setTimeout( function() {
        specialFont.style.color = "white";
    }, 200);
};

var fontColorChangeBad = function() {
    specialFont.style.color = "hsla(360, 100%, 46%, 0.81)";
    setTimeout( function() {
        specialFont.style.color = "white";
    }, 200);
};

var winChecker = function() {
    //If User wins the game...
    if (!gameBoard.includes('_')) {
        var audio = new Audio('/soundfiles/Fantastic.mp3');
        audio.play();
        // alert('You win!');
        wins++;
        numberOfGuesses = 10;
        guessCounter.textContent = numberOfGuesses;
        userGuess = ' ';
        wrongGuesses = [];
        wrongGuessesDiv.textContent = ('You won!');
        gameBoardDiv.textContent = answer.join(' ');
        setTimeout(function() {
            startGame();
        }, 2000);
        
        // gameBoardDiv.textContent = ('');
        // secretWordFunction();
        // startGame();
    } else if (numberOfGuesses === 0) {
        losses++;
        numberOfGuesses = 10;
        guessCounter.textContent = numberOfGuesses;
        userGuess = ' ';
        wrongGuesses = [];
        wrongGuessesDiv.textContent = ('You lost this round.');
        gameBoardDiv.textContent = (answer.join(' '));
        setTimeout(function() {
            startGame();
        }, 2000);
    };
};

//Game initial state
gameInit.textContent = ('Press any key to begin...');

document.onkeyup = function() {
    startGame();
}
//Starting the game
var startGame = function() {
    userGuess = ' ';
    wrongGuesses = [];
    wrongGuessesDiv.textContent = wrongGuesses.join(' ');
    numberOfGuesses = 10;
    guessCounter.textContent = numberOfGuesses;
    gameInit.textContent = ('');
    gameBoard = [];
    gameBoardDiv.textContent = gameBoard.join(' ');
    secretWordFunction();
    document.onkeyup = function(event) {
        var userGuess = event.key;
        if (gameBoard.includes(userGuess) || wrongGuesses.includes(userGuess)) {
            alert('You already guessed that one.');
            var audio = new Audio('/soundfiles/Well_Isnt_That_Wizard.mp3');
            audio.play();
        }
        else {
            var audio = new Audio('/soundfiles/Alonsy.mp3');
            audio.play();
        };
    //function to check guess with each letter
        for (var j = 0; j < answer.length; j++) {
            if (answer[j] === userGuess) {
                gameBoard[j] = userGuess;
                fontColorChangeGood();
                gameBoardDiv.textContent = gameBoard.join(' ');
                winChecker();
            }
        };
    //adding incorrect letters to screen
    if (!wrongGuesses.includes(userGuess) && !gameBoard.includes(userGuess)) {
        wrongGuesses.push(userGuess);
        fontColorChangeBad();
        wrongGuessesDiv.textContent = wrongGuesses.join(' ');
        numberOfGuesses--;
        guessCounter.textContent = numberOfGuesses;
        winChecker();
    };


};
}