const express = require("express");
const router = express.Router();
const orderHandlers = require("../controllers/orderControllers");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/orders", orderHandlers.getUserOrdersHandler);
router.post("/", orderHandlers.orderPlaceHandler);
router.get("/confirmation", orderHandlers.confirmationHandler);

module.exports = router;
