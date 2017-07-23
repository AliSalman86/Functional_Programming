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

// ex1:
// create a function that take an input arr and another function
function mapForEach(arr, fn) {
    // new array to have the result of mapping arr
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var checkr = fn(arr[i]);
        if (checkr) {
            newArr.push(checkr);
        };
        // if we push the functoin output then in case of ex3, we will have undefined values in the resulted array, check by commenting above
        // and un-commenting below
        // newArr.push(
        //     fn(arr[i])
        // )
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

// ex2: another sample of functional programming only with changing the function

var outputArr2 = mapForEach(inputArr1, function(item) {
    return item > 2;
});

// output here is boolean values, checking if it false or true every array element is larger than 2.
console.log(inputArr1);
console.log(outputArr2);
console.log('----------------------')


// another example --- adding some more functions

var inputArr2 = [12, 43, 67, 109, 3, 143, 90, 7];

var checkLimits = function(upperLimit, lowerLimit, item) {
    if (item > lowerLimit && item < upperLimit) {
        return item;
    };
};

var outputArr3 = mapForEach(inputArr2, checkLimits.bind(this, 50, 10));

console.log(inputArr2);
console.log(outputArr3);
console.log('----------------------');