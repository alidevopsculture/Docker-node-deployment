const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to serve static files like CSS
app.use(express.static('public'));

// Route to serve the main page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to Ali's Dockerized App 🚀</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #282c34;
            color: #fff;
            text-align: center;
            padding: 50px;
            margin: 0;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #f39c12;
          }
          p {
            font-size: 1.5em;
            margin-bottom: 40px;
            color: #ecf0f1;
          }
          .container {
            background-color: #34495e;
            padding: 40px;
            border-radius: 10px;
            display: inline-block;
          }
          footer {
            position: fixed;
            bottom: 20px;
            width: 100%;
            text-align: center;
            font-size: 1.2em;
            color: #7f8c8d;
          }
          .highlight {
            color: #e74c3c;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Welcome to Ali's Dockerized Node.js App</h1>
          <p>
            This app is powered by Docker and Express.js. It's a sample app that showcases how easy it is to deploy a Node.js app with Docker on the cloud.
          </p>
          <p>
            This is <span class="highlight">Shaban Khan</span>, and I want you all to appreciate that I have successfully deployed my first app! 🎉
          </p>
          <footer>
            Deployed with ❤️ by Ali DevOps Culture
          </footer>
        </div>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`I can see you at http://localhost:${PORT}`);
});
