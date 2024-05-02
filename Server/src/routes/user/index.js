const router = require("express").Router();

router.use("/auths", require("./authRouter"));
router.use("/products", require("./productRouter"));
router.use("/carts", require("./cartRouter"));
router.use("/orders", require("./orderRouter"));
router.use("/evaluates", require("./evaluateRouter"));
router.use("/rates", require("./rateRouter"));

module.exports = router;
