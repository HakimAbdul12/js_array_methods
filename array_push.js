//this method pushes a new member to the end of an array
const array = ["foo", "bar", "baz"];
array.push("qux");
console.log(array); // ["foo", "bar", "baz", "qux"]

array.push("quux", "corge");
console.log(array); // ["foo", "bar", "baz", "qux", "quux", "corge"]

array.push(["grault", "garply"]);
console.log(array); // ["foo", "bar", "baz", "qux", "quux", "corge", ["grault", "garply"]]

array.push(1,3);
console.log(array); // ["foo", "bar", "baz", "qux", "quux", "corge", ["grault", "garply"], 1, 3]

// of course arrays can contain different data types
const popped = array.pop();
console.log(typeof popped); // number