const express = require("express");
const router = express.Router();

const Blog = require("../controllers/Blog");
const verifyToken = require("../middleware/verifyToken");

router.post("/post", verifyToken, Blog.handleBlogPost);

module.exports = router;
