/******************/
/* ERROR HANDLING WITH TRY CATCH */
/******************/
// const fs = require("fs");

// function readFile() {
//   try {
//     const fileData = fs.readFileSync("data.json");
//   } catch (error) {
//     console.log(error.message);
//     console.log("An error occurred!");
//   }
//   console.log("Hi there!");
// }

// readFile();

/******************/
/* VARIABLE SCOPING & SHADOWING */
/******************/
const fs = require("fs");

function readFile() {
  let fileData;
  try {
    /* If I use const to define fileData in this block will be fine
    since it will not related to outer one in spite of they 
    have the same name (Shadowing) */
    fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log(error.message);
    console.log("An error occurred!");
  }
  // This will throw an error if variable was defined in try block (Block Scoping)
  // console.log(fileData);
  console.log("Hi there!");
}

readFile();
