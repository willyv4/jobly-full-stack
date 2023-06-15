"use strict";

const app = require("./app");
const { PORT } = require("./config");
const hostname = "localhost";

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

app.listen(PORT, hostname, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
