const express = require("express");
const app = express();

app.use(express.json());

// Temporary storage (database ki jagah)
let users = [];

// Signup API
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.send("User already exists");
  }

  users.push({ name, email, password });
  res.send("User registered successfully");
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.send("Invalid credentials");
  }

  res.send("Login successful");
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log("User Service running on port 3001");
});
