# LCM API - Task #3

A simple web API to calculate the **Lowest Common Multiple (LCM)** of two natural numbers using Node.js and Express. This API is built for Task #3 of your assignment.

The API endpoint accepts HTTP GET requests and returns the LCM as a plain string. If the inputs are invalid, it returns `NaN`.

---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Setup & Run](#setup--run)  
- [Testing the API](#testing-the-api)  
- [Deployment on Render](#deployment-on-render)  
- [URL Example](#url-example)  

---

## Features

- Calculates LCM of two natural numbers.
- Returns results as a plain string (no HTML).
- Handles invalid input gracefully by returning `NaN`.
- Supports very large numbers using `BigInt`.

---

## Technologies

- Node.js
- Express.js
- BigInt (native JavaScript)

---

## Setup & Run Locally

1. **Clone the repository**

``bash
git clone https://github.com/skmdshadmansakib/algorithm.git
cd algorithm

2. **Install dependencies**
npm install

3. **Start the server**
npm start

**Testing the API**
Use your browser or tools like curl or Postman.

Endpoint pattern:

GET /skmdshadmansakib_gmail_com?x={number}&y={number}


Examples:

Valid input:

curl "http://localhost:3000/skmdshadmansakib_gmail_com?x=12&y=15"


Response:

60


Invalid input:

curl "http://localhost:3000/skmdshadmansakib_gmail_com?x=-5&y=10"


Response:

NaN

Deployment on Render

Create a new Web Service on Render
.

Connect your GitHub repository (algorithm).

Set the Environment to Node.

Ensure start script in package.json is:

"scripts": {
  "start": "node index.js"
}


Deploy the service. Render will automatically install dependencies and start the server.

After deployment, your service will have a public URL like:

https://algorithm-o8xm.onrender.com/skmdshadmansakib_gmail_com

URL Example

To calculate LCM for x=12 and y=15:

https://algorithm-o8xm.onrender.com/skmdshadmansakib_gmail_com?x=12&y=15


Response:

60

Notes

Make sure your server is running before submitting solutions.

All characters in the email endpoint are replaced with underscores (_).

Natural numbers include 0 if required by the assignment, otherwise use only positive integers.
