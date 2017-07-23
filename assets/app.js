// Functional programming - example 1
// No functional programming way:
var inputArr = [1,2,3,4,5];     // creating I/P array
var outputArr = [];           // initiating an O/P array

for (var i = 0; i < inputArr.length; i++) {     // Loop through the array elements
    outputArr.push(
        inputArr[i] * 2     // map an array and do something to it's elements
    );
};
// console the old and new array
console.log(inputArr);
console.log(outputArr);

