/******************/
/* DEFAULT PARAMETERS */
/******************/
function greetUser(greetingPrefix, userName = "User") {
  console.log(greetingPrefix + " " + userName + "!");
}

greetUser("Hi", "Ahmed");
greetUser("Hello");

/******************/
/* REST PARAMETERS & THE SPREAD OPERATOR */
/******************/
function sumUp1(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumUp1(1, 2));

function sumUp2(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sumUp2([10, 15, 17, 4]));

/* WITH REST PARAMETERS */
function sumUp3(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sumUp3(10, 15, 17, 4));

/* WITH SPREAD OPERATOR */
function sumUp4(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const inputNumbers = [1, 5, 10, 1, 20, 31];
console.log(sumUp4(...inputNumbers));

/******************/
/* FUNCTIONS ARE OBJECTS */
/******************/
console.log(sumUp4);
// USE console.dir(functionName) IN THE BROWSER TO SEE RESULT

/******************/
/* WORKING WITH TEMPLATE LITERALS */
/******************/
function greetUser2(greetingPrefix, userName = "User") {
  // OLD WAY
  // console.log(greetingPrefix + " " + userName + "!");
  // NEW METHOD
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser2("Hi", "Ahmed");
greetUser2("Hello");
