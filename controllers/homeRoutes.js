const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('signup');
});


router.get("/login", async (req, res) => {
  res.render("login");
});

fetch("https://api.pokemontcg.io/v2/cards/xy2-2")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });



module.exports = router;