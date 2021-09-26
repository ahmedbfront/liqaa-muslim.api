const router = require("express").Router();
const controller = require("../controller/auth.controll");

router.post('/signUp', controller.signUp);
router.post('/signIn', controller.signIn);

module.exports = router;
