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
