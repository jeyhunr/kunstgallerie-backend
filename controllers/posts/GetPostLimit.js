const Post = require("../../models/Post");

const getPostLimit = (req, res, next) => {
  try {
    const count = req.params.limit;
    console.log(count)
    const promise = Post.find().limit(count);
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

module.exports = getPostLimit;
