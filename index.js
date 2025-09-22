const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Greatest common divisor (supports BigInt)
function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  while (b !== 0n) {
    [a, b] = [b, a % b];
  }
  return a;
}

// Lowest common multiple
function lcm(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  return (a * b) / gcd(a, b);
}

// Route ending with your email (converted)
app.get("/skmdshadmansakib_gmail_com", (req, res) => {
  try {
    const x = req.query.x;
    const y = req.query.y;

    // Missing params or not integers
    if (x === undefined || y === undefined) {
      return res.send("NaN");
    }

    // Convert to BigInt
    const xi = BigInt(x);
    const yi = BigInt(y);

    // Non-natural numbers (if bot treats 0 as natural, adjust accordingly)
    if (xi < 0n || yi < 0n) return res.send("NaN");

    // Send as plain string, no HTML
    res.setHeader("Content-Type", "text/plain");
    return res.send(String(lcm(xi, yi)));
  } catch (err) {
    return res.send("NaN"); // Catch invalid input (like letters)
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});