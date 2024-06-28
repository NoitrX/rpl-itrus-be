const express = require("express");
const router = express.Router();

const { getAllPost, createPost } = require("../../api/post/controller");

router.get("/", getAllPost);
router.post("/create", createPost);

module.exports = router;
