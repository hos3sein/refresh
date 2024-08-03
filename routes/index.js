const express = require("express");
const router = express.Router();

//prefix router Group
const refresh = require("./refresh");
router.use("/", refresh);

const single = require("./single");
router.use("/single",single)

module.exports = router;
