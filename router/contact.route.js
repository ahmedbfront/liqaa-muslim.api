const router = require("express").Router();
const controller = require("../controller/contact.controll");
const verifytoken = require('../helpers/verify.token');


router.get("/", controller.getAllMessages);

router.get("/:id", verifytoken, controller.getOneMessage);

router.post("/", controller.addNewMessage);

router.put("/:id", verifytoken, controller.updateMessage);

router.delete("/:id", verifytoken, controller.deleteMessage);

module.exports = router;
