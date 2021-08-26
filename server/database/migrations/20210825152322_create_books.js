exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id");
    table.string("title");
    table.string("author");
    table.string("isbn");
    table.integer("checked_out");
    table.string("due_date");
    table.string("url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("books");
};
