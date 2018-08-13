exports.up = function(knex, Promise) {
  return knex.schema.createTable("fields", function(table) {
    table.increments("id").primary();
    table.string("name").notNullable().unique();
    table.string('type').notNullable();
    table.string('pattern');
    table.boolean('required').default(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("fields");
};
