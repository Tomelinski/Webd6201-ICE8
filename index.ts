//const http = require("http");
//const url = require("url");
import fs = require('fs');
import express = require('express');

const app = express();

const PORT = 3000;
const HOST = "localhost";


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

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
