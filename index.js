require("dotenv").config();
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("THis is a home page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
