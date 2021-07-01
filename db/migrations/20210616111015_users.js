module.exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.string("email").unique();
    table.string("password");
    table.string("username");

    table.timestamps(true, true);
  });
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists("users");
};
