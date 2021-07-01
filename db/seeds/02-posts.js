module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(() => {
      // Inserts seed entries
      const faker = require("faker");

      const posts = Array.from({ length: 100 }, () => {
        return {
          content: faker.lorem.paragraphs(20),
          title: faker.lorem.sentence(),
          authorId: 1,
        };
      });

      return knex("posts").insert(posts);
    });
};
