const { Model } = require("objection");

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get idColumn() {
    return "categoryId";
  }

  static get relationMappings() {
    const Post = require("./post");

    return {
      author: {
        relation: Model.ManyToManyRelation,
        modelClass: Post,
        join: {
          from: "category.category_id",
          through: {
            from: "posts_categories.post_id",
            to: "posts_categories.category_id",
          },
          to: "post.post_id",
        },
      },
    };
  }
}

module.exports = Category;
