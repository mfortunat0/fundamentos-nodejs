const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "Hello world ignite",
  });
});

app.listen(3333);
