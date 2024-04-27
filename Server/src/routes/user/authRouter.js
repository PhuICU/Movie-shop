const router = require("express").Router();

const userController = require("../../controllers/userController");

router.post("/register", userController.Register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

// add address and phone
router.put("/:id", userController.addAddressAndPhone);
// update user
router.put("/:id", userController.updateProfileUser);
router.get("/:id", userController.getUser);

module.exports = router;
