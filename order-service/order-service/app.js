const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

// Place Order
app.post("/order", (req, res) => {
  const { user, item } = req.body;

  const newOrder = {
    id: orders.length + 1,
    user,
    item
  };

  orders.push(newOrder);
  res.send("Order placed successfully");
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(3002, () => {
  console.log("Order Service running on port 3002");
});
