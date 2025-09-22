const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Log every request (method, path, query params, user-agent, etc.)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Query params:", req.query);
  console.log("Headers:", req.headers);
  next();
});

// Greatest common divisor
function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

// Lowest common multiple
function lcm(a, b) {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / gcd(a, b);
}

app.get("/skmdshadmansakib_gmail_com", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    if (x < 0n || y < 0n) {
      return res.send("NaN");
    }

    res.send(lcm(x, y).toString());
  } catch (err) {
    console.error("Error:", err.message);
    res.send("NaN");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});