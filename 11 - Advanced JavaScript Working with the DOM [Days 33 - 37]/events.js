/*************************/
let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph Clicked!");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

/*************************/
let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  // Event object
  let enteredText = event.target.value;
  // let enteredText = event.data; // This give me the last typed character
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
