const express = require("express");
const fs = require("fs");
const yaml = require("js-yaml");

const app = express();

// load config file
const config = yaml.load(fs.readFileSync("config/config.yaml", "utf8"));

// routes

app.get(["/", "/anotherwhisk"], (req, res) => {
  res.send("Hello from app");
});

app.get(["/health", "/anotherwhisk/health"], (req, res) => {
  res.json({ status: "ok" });
});

app.get(["/version", "/anotherwhisk/version"], (req, res) => {
  res.json({ version: config.version });
});

// start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
