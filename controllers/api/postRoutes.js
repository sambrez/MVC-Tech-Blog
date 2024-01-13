const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      header: req.body.header,
      body: req.body.body,
      user_id: req.session.user_id,
    });

    if (newPost) {
      res.status(200).json(newPost);
    } else {
      res.status(400).json({ message: "No post submitted." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const update = Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (update) {
      res.status(200).json(update);
    } else {
      res.status(400).json({ message: "Post not found." });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const post = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (post) {
      res.status(200).json(post, { message: "Post deleted." });
    } else {
      res.status(400).json({ message: "Post not found." });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
