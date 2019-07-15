// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalseyValue = obj => {
  if (obj == false) {
    return true;
  } else {
    return false
  }
};

console.log(hasFalseyValue(0))
console.log(hasFalseyValue(""))
console.log(hasFalseyValue("no"))
console.log(hasFalseyValue(true))