module.exports.up = (knex) => {
  return knex.schema.createTable("posts_categories", (table) => {
    table.integer("category_id");
    table.integer("post_id");

    table
      .foreign("category_id")
      .references("category_id")
      .inTable("categories");

    table.foreign("post_id").references("post_id").inTable("posts");

    table.primary(["category_id", "post_id"]);

    table.timestamps(true, true);
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists("posts_categories");
};
