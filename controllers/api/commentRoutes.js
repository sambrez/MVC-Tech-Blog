const router = require("express").Router();
const { Comment, User, Post } = require("../../models");
const withAuth = require("../../utils/auth");
withAuth = require("../../utils/auth");

// GET all comments
router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Post,
          attributes: ["id", "header"],
        },
      ],
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET comments by post
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new comment
router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id
        });

        if (newComment) {res.status(200).json(newComment);
        } else {
            res.status(400).json({message: "No comment submitted"});
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE a comment
router.put("/:id", withAuth, async (req, res) => {
    try {
        const update = Comment.update({
            comment: req.body.comment,
            where: {
                id: req.params.id,
            },
        });

        if (update) {
            res.status(200).json(update);
          } else {
            res.status(400).json({ message: "Comment not found."});
            return;
          }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a comment
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const comment = Comment.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (comment) {
            res.status(200).json(comment, {message: "Comment deleted."});
          } else {
            res.status(400).json({ message: "Comment not found."});
            return;
          }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;