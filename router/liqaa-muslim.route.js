const router = require("express").Router();
const controller = require("../controller/liqaa-muslim.controll");
const verifytoken = require('../helpers/verify.token');


router.get("/", controller.getPost);

router.post("/", controller.addPost);

router.delete("/:id", controller.deletePost);

module.exports = router;
