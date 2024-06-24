/******************/
/* INTRODUCING CLASSES AS OBJECT BLUEPRINTS */
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
