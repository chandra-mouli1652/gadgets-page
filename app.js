const express = require("express");
const app = express();

app.get("/gadgets", (request, responce) => {
  responce.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;
