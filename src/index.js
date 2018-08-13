const express = require("express");
const app = express();

const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
const bookshelf = require("bookshelf")(knex);

const port = 3000;

const Field = bookshelf.Model.extend({
  tableName: "fields"
});

app.get("/ping", (req, res) => res.send("pong"));

app.get("/fields", (req, res) => {
  Field.fetchAll()
    .then(function(fields) {
      res.json(fields.toJSON());
    })
    .catch(function(err) {
      res.status(500);
    });
});

app.listen(port, () => console.log("Example app listening on port " + port));
