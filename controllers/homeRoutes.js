const router = require('express').Router();
const { Binder, User } = require('../models');
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
  console.log(req.session)
  res.render("home", {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id
  });
});


router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/binder", withAuth, async (req, res) => {
 res.render("binder")
});

router.get("/search", async (req, res) => {
  const pokemonName = req.query.name;
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}&limit=5`
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