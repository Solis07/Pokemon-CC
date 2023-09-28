const router = require('express').Router();
const { Binder, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    const binderData = await Binder.create({ user_id: userData.id });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "No account linked to that email." });
        return;
      }
      const correctPassword = dbUserData.checkPassword(req.body.password);

      if (!correctPassword) {
        res.status(404).json({ message: "Incorrect Password! Try Again!" });
        return;
      }

      req.session.save(() => {
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: "Logged In!" });
      });
    });
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(204).end();
  }
});

module.exports = router;