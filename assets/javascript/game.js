// declaring variables
var wordList = ['tardis', 'companion', 'doctor', 'dalek', 'cyberman', 'silence', 'universe', 'travel', 'hero', 'time', 'history', 'future'];
var gameBoard = [];

// function to get random word and convert to array;
var secretWordFunction = function() {
    var secretWordArray = [];
    var secretWord = wordList[(Math.floor(Math.random() * wordList.length))];
    secretWordArray = secretWord.split('');
    gameBoard = secretWordArray;
    console.log(gameBoard);
}

document.onkeyup = function(event) {
    // secretWordFunction();
    var userGuess = event.key;
    //function to check guess with each letter
    gameBoard.forEach(function(value) {
        if (userGuess === value) {
            console.log(value);
        }    
        });
    
}