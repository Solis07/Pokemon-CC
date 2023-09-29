const router = require("express").Router();
const { Binder, User } = require("../../models");
const withAuth = require("../../utils/auth");


// router.post("/", withAuth, (req, res) => {
//   // check the session
//   if (req.session) {
//       id: req.body.id,
//       name: req.body.name,
//       // use the id from the session
//       user_id: req.session.user_id,
//     })
//       .then((dbBinderData) => res.json(dbBinderData))
//       .catch((err) => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });

router.post("/add", withAuth, async (req, res) => {
  // Get the authenticated user's ID
  const userId = req.session.user_id; // Get the authenticated user's ID
  // Get the ID of the card to add
  const cardId = req.body.card_id; 
  console.log(req.body)

  // Check if the card is not already in the binder
  const user = await User.findOne({
    where: {
      id: userId,
    },
    include: [Binder]
  });
  const newUser = user.get({plain: true})
  console.log(newUser)
  // if (user.binder.(cardId)) {
  //   return res.status(400).json({ error: "Card already in binder" });
  // }

  // Add the card to the user's binder
  user.binder.push(cardId);
  await user.save();

  res.status(200).json({ message: "Card added to binder successfully" });
});

router.delete('/delete/:card_id', withAuth, async (req, res) => {
  // Get the authenticated user's ID
  const userId = req.session.user_id;
  // Get the ID of the card to delete
  const cardId = req.params.card_id;

  // Find the user and check if the card is in their binder
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const cardIndex = user.binder.indexOf(cardId);

  if (cardIndex === -1) {
    return res.status(404).json({ error: "Card not found in binder" });
  }

  // Remove the card from the binder
  user.binder.splice(cardIndex, 1);
  await user.save();

  res.status(200).json({ message: "Card removed from binder successfully" });
});

module.exports = router;
