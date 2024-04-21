/****************/
/* INTRODUCTORY */
/****************/

// STRINGS - NUMBERS - VARIABLES
// let age = 24;
// let greetingText = "Hi, I'm Ahmed!";
// alert(greetingText);
// greetingText = "Hi, I'm Ahmed Gamal!";
// alert(greetingText);
// alert(age);
// age = 28;
// alert(age);

// ARRAYS
let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
// alert(hobbies);
// alert(hobbies[0]);

// OBJECTS
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};
// alert(job.title);

// OPERATIONS
let adult = age - 18;
let bonus = job.salary + 3000;
// alert(adult);
// alert(bonus);

// FUNCTIONS
let totalAdultYears;
function calculateAdultYears(userAge) {
  return userAge - 18;
}
totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);
age = 45;
totalAdultYears = calculateAdultYears(age);
// alert(totalAdultYears);
