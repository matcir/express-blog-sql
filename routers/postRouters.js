const express = require("express");
const router = express.Router();
const port = 3000;
const { error } = require("console");
const postController = require("../controllers/postControllers");

//index
router.get("/", postController.index);

//show
router.get("/:id", postController.show);

//destroy
router.delete("/:id", postController.destroy);
module.exports = router;
