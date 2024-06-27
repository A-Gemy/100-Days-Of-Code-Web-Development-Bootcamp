/******************/
/* ASYNCHRONOUS CODE & CALLBACK FUNCTIONS */
/******************/
const fs = require("fs");

function readFile() {
  let fileData;

  // This is (readFile) a asynchronous method differ from (readFileSync) which the code will not wait until it finish its execution
  fileData = fs.readFile("data.txt", function (error, fileData) {
    console.log("File parsing done!");
    console.log(fileData.toString());
  });
  // This will appear first
  console.log("Hi there!");
}

readFile();
