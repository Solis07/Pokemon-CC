const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

const loginRoute = require("./api/login-route");
const userRoute = require("./api/user-route");

router.use("/user", userRoute);
router.use("/login", loginRoute);

router.use("/", (req, res) => {
  res.render("index");
});

module.export = router;
