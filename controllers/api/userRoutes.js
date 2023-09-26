const router = require('express').Router();
const { User } = require("../../models");

router.post("/signup", (req, res) => {
  console.log(req.body);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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