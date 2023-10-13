const express = require("express");

const port = 3000;
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  res.send(`${username} ${password}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
