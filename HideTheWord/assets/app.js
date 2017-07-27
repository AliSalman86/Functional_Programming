// This code will take a word from array of words and hide it by turning the characters into *s or - for spaces

var Word = 'Java Script';
var hiddenWord = [];
console.log(Word.length);


for (var i = 0; i < Word.length; i++) {
    console.log(Word[i]);
    if (Word[i] === ' ') {
        hiddenWord.push('-');
    } else {
        hiddenWord.push('*');
    }
}

console.log(hiddenWord.join(''));