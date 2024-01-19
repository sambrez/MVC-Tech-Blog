const router = require("express").Router();
const { User } = require("../../models");

// login in user
router.post("/login", async (req, res) => {
  try {
    const validUsername = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (validUsername) {
      const validPassword = await validUsername.checkPassword(
        req.body.password
      );
      if (validPassword) {
        req.session.save(() => {
          (req.session.user_id = validUsername.id),
            (req.session.logged_in = true);

          res.status(200).json({ message: "You are now logged in!" });
        });
      } else {
        res.status(400).json({ message: "Incorrect username or password." });
      }
    } else {
      res.status(400).json({ message: "Incorrect username or password." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// logout user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(200).end();
  }
});

// register a new user
router.post("/", async (req, res) => {
  try {
    const newUser = User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
