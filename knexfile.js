require("dotenv").config();

// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./nodepress.sqlite",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },

    ...knexSnakeCaseMappers(),
  },
};
