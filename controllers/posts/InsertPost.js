const Post = require("../../models/Post");

const insertPost = (req, res, next) => {
  try {
    const { title, url, thumbnailUrl } = req.body;

    // check if body not empty
    if (title && url && thumbnailUrl) {
      // creating a post object
      const post = Post.create({
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl,
        deleted: false
      });
      return res.status(201).json({ postData: { title, url, thumbnailUrl } });
    }

    return res.status(400).json({ statusMessage: "Body is empty." });
  } catch (e) {
    return res.status(500).json({
      statusMessage: "Server error: Something went wrong. Please try again.",
    });
  }
};

module.exports = insertPost;
