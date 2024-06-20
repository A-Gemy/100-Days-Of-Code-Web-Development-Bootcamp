/******************/
/* PRIMITIVE VS REFERENCE VALUES */
/******************/
const hobbies = ["Sports", "Walking"]; // A pointer to the array is stored here
const age = 24; // The value itself is stored

hobbies.push("Video games"); // The address of the array doesn't change

// hobbies = ["Reading", "Cooking"] // This is  NOT allowed. new address is stored!

console.log(hobbies);

// Primitive values: Numbers, Strings, bBooleans & more (Undefined, Null)
// Reference values: Objects

const person = { age: 28 };

function getAdultYears(p) {
  // This will change the original object
  p.age -= 18;
  return p.age;
  // This is a way to walk around this bug(Feature of JS)!
  // return p.age - 18;
}

// console.log(getAdultYears(person));
// Another way is to make a copy of an object using the spread operator
console.log(getAdultYears({ ...person }));
console.log(person);
