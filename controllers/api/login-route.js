const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  res.render('Login');
});

router.post('/', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No account associated with that email' })
        return;
      }

      const passwordCorrect = dbUserData.checkPassword(req.body.password);
  if (!passwordCorrect) {
    res.status(404).json({ message: 'Incorrect password! Try again!' })
    return;
  }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'Logged in!' });
      });
   });
});

module.exports = router;