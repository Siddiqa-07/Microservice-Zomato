const express = require("express");
const app = express();

app.use(express.json());

// Place Order API
app.post("/order", (req, res) => {
  res.send("Order placed successfully");
});

// Get Orders API
app.get("/orders", (req, res) => {
  res.send("All orders list");
});

app.listen(3002, () => {
  console.log("Order Service running on port 3002");
});
