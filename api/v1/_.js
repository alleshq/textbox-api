const express = require("express");
const auth = require("../../util/auth");

const router = express.Router();
router.get("/me", auth, require("./me"));
router.post("/new", auth, require("./new"));
router.get("/doc/:code", require("./doc"));
router.get("/doc/:code/raw", require("./raw"));
router.post("/doc/:code/edit", auth, require("./edit"));
router.post("/doc/:code/delete", auth, require("./delete"));

module.exports = router;