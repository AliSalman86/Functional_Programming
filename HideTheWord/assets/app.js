// This code will take a word from array of words and hide it by turning the characters into *s or - for spaces

// var Word = 'Java Script';
// var hiddenWord = [];
// console.log(Word.length);


// for (var i = 0; i < Word.length; i++) {
//     console.log(Word[i]);
//     if (Word[i] === ' ') {
//         hiddenWord.push('-');
//     } else {
//         hiddenWord.push('*');
//     }
// }

// console.log(hiddenWord.join(''));

// functional programming with javascript
// hideTheWord would accept two parameters, an array and a function to process the array.
function hideTheWord(wordsArr, fn) {
    // new array to take the hiddden words
    var hiddenWords = [];
    // a for loop go through the words array
    for (var i = 0; i < wordsArr.length; i++) {
        // pass every word from the words array to the function that would return a hidden word and push it to the new array.
        // jaafar ali tabarek chase skye rocky marshall zuma everest rubble ryder
        hiddenWords.push(fn(wordsArr[i]));
    }
    // return the new array after looping through the input array
    return hiddenWords;
}

// the input array
var words = ['java script', 'python', 'ruby', 'nodejs', 'mysql'];

// create a var with passing the input word and the function to hide it
var hiding = hideTheWord(words, function(word) {
    // var to contain every single word, DON'T MISTAKE IT WITH hiddenWords array that contain the whole new array with all hiddenWord
    var hiddenWord = [];
    // for loop to loop through all the letters of each word
    for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        // if there is a space, replace it with -
        if (word[i] === ' ') {
        hiddenWord.push('-');
        } else {
            // for all other words push a star instead of the letter
            hiddenWord.push('*');
        }
    }
    // return the word after hiding it so it would be pushed to the new array
    return hiddenWord.join('');
});

// console log the results
console.log(words[1]);
console.log(hiding[1]);