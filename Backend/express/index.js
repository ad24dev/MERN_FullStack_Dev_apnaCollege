const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("i am root");
});

app.get("/apple", (req, res) => {
  res.send("you connected apple path");
});

app.get("/orange", (req, res) => {
  res.send("you connected orange path");
});

app.get("*", (req, res) => {
  res.send("this path does not exist");
});

// app.use((req, res) => {
//   // console.log("request recevied");
//   let code = "<h1>Furits</h1> <ul><li>apple</li><li>orange</li></ul>";
//   res.send(code);
// });
