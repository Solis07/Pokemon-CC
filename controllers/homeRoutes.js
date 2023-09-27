const router = require('express').Router();
const { Binder, User } = require('../models');

router.get('/', async (req, res) => {
  res.render('signup');
});


router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/binder", async (req, res) => {
  const pokemonName = req.query.name;
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
    );
    const data = await response.json();
    const cards = data.data;
    res.render("pokemon", { cards });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});


module.exports = router;