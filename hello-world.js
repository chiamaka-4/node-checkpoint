// create a simple server
const http = require("http");
const fs = require("fs");
const { passwordGenerator } = require("./Password-generator");
const { sendEmail } = require("./email-sender");

fs.writeFileSync("welcome.txt", "hello node");
fs.readFile("welcome.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

passwordGenerator();
sendEmail();

console.log("hello world");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    //  you can also write response.writeHead(200,{"Content-Type": "text/plain"})
    response.write("<h2>This is coming from a backend</h2>");
    response.end();
  })
  .listen(3000);
// this means you want to run server on port 3000
console.log("server is running on port 3000");
