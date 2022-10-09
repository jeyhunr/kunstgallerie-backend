const Post = require("../../models/Post");

const getPost = (req, res, next) => {
  try {
    const promise = Post.find();
    promise
      .then((data) => {
        res.json(data);
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

module.exports = getPost;
