const router = require("express").Router();
const upload = require("../../config/multer");

const productController = require("../../controllers/movieController");

router.post("/", upload.single("image"), productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
