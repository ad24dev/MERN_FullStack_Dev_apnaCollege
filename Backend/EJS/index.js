const express = require("express");
const app = express();

const port = 8080;

app.use("port", () => {
  console.log(`port is running on  port ${port}`);
});
