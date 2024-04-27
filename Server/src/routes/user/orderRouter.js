const router = require("express").Router();

const orderController = require("../../controllers/ordercontroller");

router.post("/", orderController.addOrder);
router.get("/:id", orderController.getOrderById);
router.get("/", orderController.getOrderAdmin);
router.put("/:id", orderController.updateOrderToPaid);

module.exports = router;
