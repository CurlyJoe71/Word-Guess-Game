// declaring variables
var wordList = ['tardis', 'companion', 'doctor', 'dalek', 'cyberman', 'silence', 'universe', 'travel', 'hero', 'time', 'history', 'future'];
var secretWord = function() {
    return wordList[(Math.floor(Math.random() * wordList.length))];
}