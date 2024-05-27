// const userName = "Gemy";
// console.log(userName);

const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/year") {
    response.statusCode = 200;
    response.end(
      "<h1>The current year is " + new Date().getFullYear() + ".</h1>"
    );
  } else {
    response.statusCode = 200;
    response.end("<h1>Hello World, from backend!</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
