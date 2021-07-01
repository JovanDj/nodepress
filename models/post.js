const { Model } = require("objection");

class Post extends Model {
  static get tableName() {
    return "posts";
  }

  static get idColumn() {
    return "postId";
  }

  static get relationMappings() {
    const User = require("./user");

    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "posts.author_id",
          to: "users.user_id",
        },
      },
    };
  }
}

module.exports = Post;
