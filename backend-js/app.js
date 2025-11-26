// app.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = app;

if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
  });
}