const express = require("express");
const router = express.Router();
const handlers = require("../controllers/rootControllers");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", handlers.signInHandler);
router.get("/signUp", handlers.signUpHandler);
router.get("/menu", handlers.menuHandler);
router.get("/logout", handlers.logout);
router.get("/home", handlers.homeHandler);
router.post("/", handlers.signInAuthHandler);
router.post("/signUp", handlers.signUpAuthHandler);

module.exports = router;
