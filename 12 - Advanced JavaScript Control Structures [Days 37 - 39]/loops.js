// The Regular for Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// The for-of Loop
const users = ["Max", "Anna", "Ahmed"];
for (const user of users) {
  console.log(user);
}

// The for-in Loop
const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};
for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

// While loop
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done!");
