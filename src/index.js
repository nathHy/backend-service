const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const port = 3000;

const routes = require('./routes');

app.use(bodyParser.json({ limit: '1mb' }))

app.get("/ping", (req, res) => res.send("pong"));

Object.keys(routes).forEach(router => {
  console.log(routes[router])
  app.use(routes[router]);
})

app.get("/fields", (req, res) => {

});

app.listen(port, () => console.log("Example app listening on port " + port));
