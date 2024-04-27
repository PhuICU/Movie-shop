const router = require("express").Router();
const authController = require("../../controllers/userController");

//detele user
router.delete("/:id", authController.deleteUser);
//get all
router.get("/", authController.getAllUser);
module.exports = router;
