const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlstr = `<h1>welcome to the page ${username}</h1>`;
  res.send(htmlstr);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>nothing searched</h1>");
  }
  res.send(`<h1>search result for: ${q} </h1>`);
});

// app.use((req, res) => {
//   console.log("request Recevied");
//   res.send("<h1>Furit</h1> <ul><li>apple</li><li>orange</li></ul>");
// });
