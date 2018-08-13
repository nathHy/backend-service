const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile);
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
