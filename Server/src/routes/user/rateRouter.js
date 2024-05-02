const Router = require("express").Router();

const rateController = require("../../controllers/rateController");

// Add a rating
Router.post("/addrate", rateController.addRate);

// Get all ratings by product_id
Router.get("/getRates/:productId", rateController.getRate);

//update rate
Router.put("/updateRate", rateController.updateRate);

//delete rate
Router.delete("/deleteRate/:productId", rateController.deleteRate);

module.exports = Router;
