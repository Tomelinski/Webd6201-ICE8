//const http = require("http");
//const url = require("url");
import fs = require("fs");
import path = require("path");

import express = require("express");

const app = express();

const PORT = 3000;
const HOST = "localhost";

//static files
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "Client")));
app.use(express.static(path.join(__dirname, "Views")));

//default route
app.get("/", (req, res) => {
  displaySPA(res);
});

//
app.get("*", (req, res) => {
  displaySPA(res);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

function displaySPA(res: any): void {
  fs.readFile("index.html",  (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200);
      res.end(content);
    }
  });
}

//const server = http.createServer((req, res) => {
// let file = __dirname + "\\" + path;
// fs.readFile(file, function (err, content) {
//   if (err) {
//     res.writeHead(404);
//     res.end();
//   } else {
//     res.setHeader("X-Content-Type-Options", "nosniff");
//     let mime = lookup(path);
//     res.writeHead(200, { "Content-type": mime });
//     res.end(content);
//   }
// });
//});

//server.listen(PORT, HOST, () => {
//  console.log(`Listening on port ${PORT}`);
//});
