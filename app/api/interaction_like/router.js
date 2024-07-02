const express = require("express");
const router = express.Router();
const { likePost } = require("../../api/interaction_like/controller");

router.post("/like/:postId", likePost);

module.exports = router;
