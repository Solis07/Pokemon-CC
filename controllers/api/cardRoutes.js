const router = require("express").Router();
const { Card, User, Binder } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// get all cards
router.get("/", (req, res) => {
  Card.findAll({
    attributes: ["id", "name", "series", "user_id"],
    //The data will be ordered in descending order based on the "created_at" attribute.
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Binder,
        attributes: ["id", "name", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["id", "username", "email", "password"],
        },
      },
      {
        model: User,
        attributes: ["id", "username", "email", "password"],
      },
    ],
  })
    .then((dbCardData) => res.json(dbCardData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Card.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "series", "user_id"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "email", "password"],
      },
      {
        model: Binder,
        attributes: ["id", "name", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["id", "username", "email", "password"],
        },
      },
    ],
  })
    .then((dbCardData) => {
      if (!dbCardData) {
        res.status(404).json({ message: "No card found with this id" });
        return;
      }
      res.json(dbCardData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Card.create({
    id: req.body.id,
    name: req.body.name,
    series: req.body.series,
    user_id: req.session.user_id,
  })
    .then((dbCardData) => res.json(dbCardData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Card.update(
    {
      name: req.body.name,
      series: req.body.series,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCardData) => {
      if (!dbCardData) {
        res.status(404).json({ message: "No card found with this id" });
        return;
      }
      res.json(dbCardData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Card.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCardData) => {
      if (!dbCardData) {
        res.status(404).json({ message: "No card found with this id" });
        return;
      }
      res.json(dbCardData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
