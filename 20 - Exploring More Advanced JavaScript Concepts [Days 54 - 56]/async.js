/******************/
/* ASYNCHRONOUS CODE & CALLBACK FUNCTIONS */
/******************/
// const fs = require("fs");

// function readFile() {
//   let fileData;

//   // This is (readFile) a asynchronous method differ from (readFileSync) which the code will not wait until it finish its execution
//   fileData = fs.readFile("data.txt", function (error, fileData) {
//     console.log("File parsing done!");
//     console.log(fileData.toString());
//   });
//   // This will appear first
//   console.log("Hi there!");
// }

// readFile();

/******************/
/* PROMISES */
/******************/

const { error } = require("console");
const fs = require("fs/promises");

function readFile() {
  let fileData;

  // This is (readFile) a asynchronous method differ from (readFileSync) which the code will not wait until it finish its execution
  // fileData = fs.readFile("data.txt", function (error, fileData) {
  /* IF ERRORS HAPPENED WITH ASYNCHRONOUS WE COULD DEAL WITH IT LIKE THIS */
  // if (error) {
  // ...
  // }
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  //   // Start another async task that sends the data to a database
  // });

  /* IF ERRORS HAPPENED WITH PROMISES WE USE THE CATCH METHOD */
  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done!");
      console.log(fileData.toString());
      const valueForAsyncOperation = 10;
      return valueForAsyncOperation;
    })
    .then(function (valueForAsyncOperation) {
      console.log(
        `The value returned from previous function is: ${valueForAsyncOperation}`
      );
    })
    .catch(function (error) {
      console.log(error);
    });

  // This will appear first
  console.log("Hi there!");
}

readFile();
