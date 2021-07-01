module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(() => {
      // Inserts seed entries
      const faker = require("faker");

      const categories = Array.from({ length: 10 }, () => {
        return {
          name: faker.lorem.word(),
        };
      });

      return knex("categories").insert(categories);
    });
};
