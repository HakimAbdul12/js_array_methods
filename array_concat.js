//this method is used to merge two or more arrays
const array1 = ["foo", "bar"];
const array2 = ["baz", "qux"];

const array3 = array2.concat(array1);
const array4 = array1.concat(array1); //trying to concatinate the array itself

console.log(array3); // ["baz", "qux", "foo", "bar"]
console.log(array4); // ["foo", "bar", "foo", "bar"]