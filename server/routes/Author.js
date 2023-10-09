const express = require("express");
const router = express.Router();

const Author = require("../controllers/Author");

router.post("/login", Author.handleLogin);
router.post("/register", Author.handleRegister);

module.exports = router;
