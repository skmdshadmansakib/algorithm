const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Greatest common divisor
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Lowest common multiple
function lcm(a, b) {
  return (BigInt(a) * BigInt(b)) / BigInt(gcd(a, b));
}

// Route ending with your email (converted)
app.get("/skmdshadmansakib_gmail_com", (req, res) => {
  const x = req.query.x;
  const y = req.query.y;

  // Validate numbers
  if (
    x === undefined || y === undefined ||
    isNaN(x) || isNaN(y) ||
    !Number.isInteger(Number(x)) || !Number.isInteger(Number(y)) ||
    Number(x) < 0 || Number(y) < 0
  ) {
    return res.send("NaN");
  }

  // Send LCM as plain text
  res.type("text/plain").send(String(lcm(x, y)));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});