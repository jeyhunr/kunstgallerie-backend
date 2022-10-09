const { json } = require("express");
const Post = require("../../models/Post");

const deletePost = (req, res, next) => {
  try {
    const postId = req.params.post_id;
    const promise = Post.findByIdAndRemove(postId);
    promise
      .then((post) => {
        if (post == null){
         return res.status(404).json({ message: "Post not found.", code: 404 });
        }
        return res.status(200).json({ message: "Post successfully removed", code: 200 });
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (e) {
    return res.status(500).json({
      statusMessage: "Server error: Something went wrong. Please try again.",
    });
  }
};

module.exports = deletePost;
