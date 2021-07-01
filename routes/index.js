const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  const { results: posts, total } = await Post.query()
    .withGraphJoined("author")
    .page(1, 10);
  res.render("index", { title: "Home", posts, total });
});

module.exports = router;
