// declaring variables
var wordList = ['tardis', 'companion', 'doctor', 'dalek', 'cyberman', 'silence', 'universe', 'travel', 'hero', 'time', 'history', 'future'];

var answer = [];
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
console.log(gameBoard);

//am I going to need some sort of indexOf to match the position of the userGuess and something else...


document.onkeyup = function(event) {
    // secretWordFunction();
    var userGuess = event.key;
    //function to check guess with each letter
    answer.forEach(function(value) {
        if (userGuess === value) {
            var location = answer.indexOf(value);
            console.log(value);
            console.log(location);
            gameBoard[location] = answer[location];
            console.log(gameBoard);
        }    
        });
    
}