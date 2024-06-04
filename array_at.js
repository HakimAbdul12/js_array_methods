// the .at() method is used to access elements of an array by their index. this was later introduced to solve the issue of negative bracket indexing.

const array = ["foo", "bar", "baz"];


console.log(array[0]); // foo
console.log(array.at(-1)); // baz