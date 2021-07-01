module.exports.up = (knex) => {
  return knex.schema.createTable("categories", (table) => {
    table.increments("category_id");
    table.string("name").index();

    table
      .foreign("category_id")
      .references("category_id")
      .inTable("posts_categories");

    table.timestamps(true, true);
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists("categories");
};
