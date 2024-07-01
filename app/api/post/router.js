const express = require("express");
const router = express.Router();
const { getAll, getDetail, createP, updateP, deleteP } = require("../../api/post/controller");

router.get("/post", getAll);
router.get("/post/:id", getDetail);
router.post("/post", createP);
router.put("/post/update/:id", updateP);
router.delete("/post/delete/:id", deleteP);

module.exports = router;
