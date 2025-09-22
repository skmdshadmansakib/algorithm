const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// gcd function
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// lcm function
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Root route (optional, gives info if someone visits "/")
app.get("/", (req, res) => {
  res.send("LCM API is running. Use /skmdshadmansakib_gmail_com?x=...&y=...");
});

// Your email route
// Email: skmdshadmansakib@gmail.com → route: skmdshadmansakib_gmail_com
app.get("/skmdshadmansakib_gmail_com", (req, res) => {
  const x = parseInt(req.query.x, 10);
  const y = parseInt(req.query.y, 10);

  // Validate that x and y are natural numbers
  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    return res.send("NaN");
  }

  res.send(String(lcm(x, y)));
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}/skmdshadmansakib_gmail_com?x=12&y=18`);
});