const express = require("express");
const router = express.Router();
const userHandlers = require("../controllers/userController");

router.get("/", userHandlers.userDataHandler);
module.exports = router;
