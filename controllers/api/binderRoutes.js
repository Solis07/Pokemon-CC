const router = require("express").Router();
const { Binder, Card } = require("../../models");
const withAuth = require("../../utils/auth");


router.post("/", withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Binder.create({
      id: req.body.id,
      name: req.body.name,
      // use the id from the session
      user_id: req.session.user_id,
    })
      .then((dbBinderData) => res.json(dbBinderData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});



router.get("/", (req, res) => {
  Binder.findAll({})
    .then((dbBinderData) => res.json(dbBinderData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Binder.create({
      id: req.body.id,
      name: req.body.name,
      // use the id from the session
      user_id: req.session.user_id,
    })
      .then((dbBinderData) => res.json(dbBinderData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete("/:id", withAuth, (req, res) => {
  Binder.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBinderData) => {
      if (!dbBinderData) {
        res.status(404).json({ message: "No binder found with this id" });
        return;
      }
      res.json(dbBinderData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
