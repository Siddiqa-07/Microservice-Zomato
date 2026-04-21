const express = require("express");
const app = express();

app.use(express.json());

// Signup API
app.post("/signup", (req, res) => {
  res.send("User registered");
});

// Login API
app.post("/login", (req, res) => {
  res.send("User logged in");
});

app.listen(3001, () => {
  console.log("User Service running on port 3001");
});
