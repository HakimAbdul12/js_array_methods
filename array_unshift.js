//this method adds an element to the beginning of an array and returns the new length of the array
const array = ["foo", "bar", "baz"];
const newArrayLenght = array.unshift("qux");

console.log(newArrayLenght); // 4
console.log(array); // ["qux", "foo", "bar", "baz"]