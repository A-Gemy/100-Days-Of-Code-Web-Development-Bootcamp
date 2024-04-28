// console.log(window);
// alert() === window.alert();

// console.log(document);
// console.dir(document);

// EXAMPLE
// document.body.children[1].children[0].href = "https://google.com";
// Another way - (It's much more convenient)
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";
// Another way
anchorElement = document.querySelector("p a"); // p a { color: red; }
anchorElement.href = "https://youtube.com";

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "Google!";
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");
// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");
// 2. Remove it!
// This way doesn't work with older versions of Web Browsers
firstH1Element.remove();
// This method works with older versions
// firstH1Element.parentElement.removeChild(firstH1Element);

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML Property
/************/
// console.log(firstParagraph.innerHTML);
// console.log(firstParagraph.textContent);
/************/
firstParagraph.textContent = "Hi! This is <strong>Important text</strong>";
firstParagraph.innerHTML = "Hi! This is <strong>Important text</strong>";
