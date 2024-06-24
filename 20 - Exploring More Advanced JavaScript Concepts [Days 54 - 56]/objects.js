/******************/
/* INTRODUCING CLASSES AS OBJECT BLUEPRINTS - CLASSES & METHODS & THIS */
/******************/
// THIS IS THE WAY WE USE TO CREATE AN OBJECT (OBJECT LITERAL NOTATION)
// const job = {
//   title: "Developer",
//   location: "New York",
//   salary: 50000,
// };

// THIS IS A BLUEPRINT FOR A DATE OBJECT
// console.log(new Date().toISOString());

/* IF WE HAVE ANOTHER JOB WE COULD DO IT LIKE THIS BUT,
WHAT IF WE A HAVE A LOT OF JOBS (PRODUCTS, STUDENTS, ACCOUNTS) OR ANYTHING
*/
// const job2 = {
//   title: "Cook",
//   location: "Munich",
//   salary: 35000,
// };

// THE JOB CLASS SERVES AS A BLUEPRINT FOR CREATING JOB OBJECTS WITH SPECIFIC ATTRIBUTES LIKE JOB TITLE, LOCATION, AND SALARY.
class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.place = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.place}, and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
const engineer = new Job("Engineer", "Miami", 45000);

console.log(developer);
console.log(engineer);

developer.describe();
engineer.describe();

/******************/
/* DESTRUCTURING OBJECTS & ARRAYS */
/******************/
// ARRAYS
const input = ["Ahmed", "Gamal"];
// OLD WAY
const firstName = input[0];
const lastName = input[1];
console.log(firstName, lastName);
// WITH DESTRUCTURING
const [first, last] = input;
console.log(first, last);

// OBJECTS
const job3 = { title: "Developer", location: "New York" };
// OLD WAY
const jobTitle = job3.title;
const jobLocation = job3.location;
console.log(jobTitle, jobLocation);
// WITH DESTRUCTURING
/* NOTICE YOU HAVE TO USE THE SAME PROPERTY NAME*/
const { title, location } = job3;
console.log(title, location);
// IF YOU WANT TO USE YOUR OWN NAME
const { title: jTitle } = job3;
console.log(jTitle);
