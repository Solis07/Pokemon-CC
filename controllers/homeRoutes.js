const router = require('express').Router();
const { Binder, User } = require('../models');

router.get('/', async (req, res) => {
  res.render('home');
});


router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});




fetch("https://pokeapi.co/api/v2/pokemon?")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });



module.exports = router;