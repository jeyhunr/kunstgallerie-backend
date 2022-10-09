const getPost = require("./GetPost");
const insertPost = require("./InsertPost");
const getPostLimit = require("./GetPostLimit");
const deletePost = require("./DeletePost");

exports.controllers = {
  getPost,
  insertPost,
  getPostLimit,
  deletePost,
};
