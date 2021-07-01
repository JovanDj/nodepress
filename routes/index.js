const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const Category = require("../models/category");

router.get("/", async (req, res, next) => {
  try {
    const {
      results: posts,
      total,
      categories,
    } = await Post.transaction(async (trx) => {
      const { results, total } = await Post.query(trx)
        .withGraphJoined("author")
        .page(1, 10);
      const categories = await Category.query(trx);

      return { results, total, categories };
    });

    res.render("index", { title: "Home", posts, total, categories });
  } catch (err) {
    // Here the transaction has been rolled back.
    next(err);
  }
});

module.exports = router;
