const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Ali's Dockerized Node.js App! this is shaban khan and i want you guys to appriciate that i deplpoyed my first app thanks!!");
});

app.listen(PORT, () => {
  console.log(`I can see you at--- ${PORT}`);
});
