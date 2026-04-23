const express = require("express");
const app = express();

app.use(express.json());

// Payment API
app.post("/pay", (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.send("Amount required");
  }

  res.send("Payment successful");
});

app.listen(3003, () => {
  console.log("Payment Service running on port 3003");
});
