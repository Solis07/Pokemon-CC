const router = require('express').Router();
const { User } = require("../../models");

router.post('/', (req, res) => {
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
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: "Logged In!" });
      });
    });
});

router.put('/', async (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "User with this id does not exist." });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  res.send("User was successfully deleted");
});

module.exports = router;