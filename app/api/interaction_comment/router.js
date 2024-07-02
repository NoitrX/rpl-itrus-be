const express = require("express");
const router = express.Router();
const { getAll, postComments } = require("../../api/interaction_comment/controller");

router.get("/post_comment/:postId", getAll);
router.post("/post_comment/:postId", postComments);

module.exports = router;
