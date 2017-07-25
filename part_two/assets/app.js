// the objects in underscore library is '_'

var inputArr = [21,65,33,87,94,15,70,9];
var outputArr = _.map(inputArr, function(item) {
    return item * 2;
});

console.log(outputArr);