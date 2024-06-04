//##################################################################//
const array = ["foo", "bar", "baz"];

console.log(array[-3]) // we cannot use negative bracket indexing on an array as it means value of key -1. this is the same for obkjects too.
//instead, do this
console.log(array.at(-1))

const obj = {
    0: "foo",
    1: "bar",
    2: "baz",
}
console.log(obj[-1]) //undfined because there is not key of -1
//##############################################################//