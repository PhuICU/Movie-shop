const router = require("express").Router();
const { authentication } = require("../../middlewares/authMiddlewares");

const orderController = require("../../controllers/ordercontroller");

router.post("/payment_vnpay_return", orderController.addOrder);
router.get("/", authentication, orderController.getOrders);
router.post("/", orderController.addOrder);
router.post("/payment_vnpay", authentication, orderController.addOrderByVNPay);
router.patch("/:id", authentication, orderController.updateOrder);

module.exports = router;
