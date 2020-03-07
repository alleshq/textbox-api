const express = require("express");
const auth = require("../../util/auth");

const router = express.Router();
router.get("/me", auth, require("./me"));

module.exports = router;