const router = require("express").Router();
const { Comment, Post, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "header", "body", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["id", "comment", "user_id", "post_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    const posts = userPosts.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const userPost = await Post.findOne({
      where: {
        id: req.session.id,
      },
      attributes: ["id", "header", "body", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "comment", "user_id", "post_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (userPost) {
      const post = userPost.get({ plain: true });

      res.render("edit", { post, loggedIn: true });
    } else {
      res.status(400).json({ message: "Post not found." });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/create", (req, res) => {
    res.render("create");
});

module.exports = router;