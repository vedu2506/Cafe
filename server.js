const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy menu items
const menuItems = [
  { name: "Espresso", price: 120 },
  { name: "Cappuccino", price: 150 },
  { name: "Latte", price: 170 },
];

// API to get menu
app.get("/menu", (req, res) => {
  res.json(menuItems);
});

// API to handle contact form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Contact:", { name, email, message });
  res.json({ message: `Thank you for contacting us, ${name}!` });
});

// Start server
app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});
