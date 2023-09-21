const router = require('express').Router();

const apiRoutes = require('./api');
const userRoute = require("./user-route");

router.use('/api', apiRoutes);
router.use('/user', userRoute);

module.exports = router;