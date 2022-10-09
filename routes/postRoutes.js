const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts/postControllers");

router.get("/getposts", postController.controllers.getPost);
router.get("/getpost/:limit", postController.controllers.getPostLimit);
router.post("/insertpost", postController.controllers.insertPost);
router.delete("/deletepost/:post_id", postController.controllers.deletePost);

module.exports = router;
