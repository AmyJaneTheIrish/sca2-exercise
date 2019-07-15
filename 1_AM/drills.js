const assert = require("assert");

// Feel free to look things up online!


// A function which converts a multi-word string into an array of words
const tokenize = str => {
  return str.split(" ")
};

// TODO - write a function which reverses the string
const reverse = str => {
  let array1 = str.split("")
  let x = array1.reverse()
  let y = x.join("")
  return y
};


// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = function(arr) {
  return new Set(arr)
};


function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}



// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
// const zip = (arr1, arr2) => {
//   let x = arr1.reduce((a, b) => a + b, 0) 
//   let y = arr2.reduce((a, b) => a + b, 0)
//   if x === y {
//     return True
//   }
// };
// console.log(zip([1,2,3,4], [1,2,3,3]))


const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
  arr = str.split("")
  for(let i =0; i<num; i++) {
    const l =arr.shift()
    arr.push(l)
  }
  newStr = arr.join("")
  return newStr
};
console.log(shiftRight("Hello", 3))


const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
console.log(tokenize("no thanks mate"))
console.log(reverse("Big oof"))
console.log(uniqueOnes(["hi", "hi", "hello", "whatup"]))
console.log(factorialize(1));
