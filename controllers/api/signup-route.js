const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  res.render('signup');
});

router.post('/', (req, res) => {
  console.log(req.body)
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.firstname = dbUserData.firstname;
        req.session.lastname = dbUserData.lastname;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;