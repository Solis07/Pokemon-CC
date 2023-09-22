const router = require('express').Router();
const loginRoute = require('./login-route');
const userRoute = require('./user-route');
const signupRoute = require('./signup-route');

router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/signup', signupRoute);



module.export = router;