const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {
  console.log("request Rececived");
  let code = "<h1>Furits <ul><li>Apple</li><li>Orange</li></ul></h1>";
  res.send(code);
});
