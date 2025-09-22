const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Greatest common divisor with BigInt
function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

// Lowest common multiple with BigInt
function lcm(a, b) {
  return a === 0n || b === 0n ? 0n : (a * b) / gcd(a, b);
}

// Route ending with your email (converted)
app.get("/skmdshadmansakib_gmail_com", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    if (x < 0n || y < 0n) {
      return res.send("NaN");
    }

    res.send(lcm(x, y).toString());
  } catch {
    res.send("NaN");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});