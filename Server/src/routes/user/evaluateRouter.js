const router = require("express").Router();

const evaluateController = require("../../controllers/evaluateController");

// Add a comment
router.post("/addcomment", evaluateController.addcomment);

// Get all comments by product_id
router.get("/getComments/:product_id", evaluateController.getComments);

module.exports = router;
