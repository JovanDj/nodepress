module.exports.up = (knex) => {
  return knex.schema.createTable("posts", (table) => {
    table.increments("post_id");
    table.text("content");
    table.string("title").index();
    table.integer("author_id");

    table.foreign("author_id").references("user_id").inTable("users");
    table.foreign("post_id").references("post_id").inTable("posts_categories");

    table.timestamps(true, true);
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists("posts");
};
