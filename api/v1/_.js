const express = require("express");
const auth = require("../../util/auth");

const router = express.Router();
router.get("/me", auth, require("./me"));
router.post("/new", auth, require("./new"));
router.get("/doc/:code", require("./doc"));
router.get("/doc/:code/raw", require("./docRaw"));

module.exports = router;