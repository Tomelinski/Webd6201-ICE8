"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "localhost";
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "Client")));
app.use(express.static(path.join(__dirname, "Views")));
app.get("/", (req, res) => {
    displaySPA(res);
});
app.get("*", (req, res) => {
    displaySPA(res);
});
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
function displaySPA(res) {
    fs.readFile("index.html", (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end();
        }
        else {
            res.writeHead(200);
            res.end(content);
        }
    });
}
//# sourceMappingURL=index.js.map