const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('signup');
});


router.get("/login", async (req, res) => {
  res.render("login");
});

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.table(data);
  });



module.exports = router;