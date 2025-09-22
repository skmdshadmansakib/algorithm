const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Greatest common divisor
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Lowest common multiple
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Route ending with your email (converted)
app.get("/skmdshadmansakib_gmail_com", (req, res) => {
  const x = parseInt(req.query.x, 10);
  const y = parseInt(req.query.y, 10);

  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    return res.send("NaN");
  }

  res.send(String(lcm(x, y)));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});