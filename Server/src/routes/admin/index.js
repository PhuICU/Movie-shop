const router = require("express").Router();

router.use("/admin/auths", require("./authRouter"));
router.use("/admin/products", require("./productRouter"));

module.exports = router;
