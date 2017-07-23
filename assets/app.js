// Functional programming - example 1
// No functional programming way:
var inputArr = [1,2,3,4,5];     // creating I/P array
var outputArr = [];           // initiating an O/P array

for (var i = 0; i < inputArr.length; i++) {     // Loop through the array elements
    outputArr.push(
        inputArr[i] * 2     // map an array and do something to it's elements
    );
};
// console the input and new array
console.log(inputArr);
console.log(outputArr);
console.log('----------------------')


// Using functional programming to re-code the above example

// create a function that take an input arr and another function
function mapForEach(arr, fn) {
    // new array to have the result of mapping arr
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    };
    return newArr;
}

var inputArr1 = [1,2,3,4,5];

var outputArr1 = mapForEach(inputArr1, function(item) {
    return item * 2;
});

// console the input and new array
console.log(inputArr1);
console.log(outputArr1);
console.log('----------------------')