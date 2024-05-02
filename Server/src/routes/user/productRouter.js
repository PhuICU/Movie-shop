const router = require("express").Router();
const upload = require("../../config/multer");

const productController = require("../../controllers/movieController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
// classification
router.get("/type/:category", productController.classification);
// router.post("/", upload.single("image"), productController.createProduct);
// router.put("/:id", productController.updateProduct);
// router.delete("/:id", productController.deleteProduct);

//rating

module.exports = router;
