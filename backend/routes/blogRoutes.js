var express = require("express");
var router = express.Router();

const auth = require("../middleware/auth");
const {
  blogList,
  addBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController.js");

router.route("/").get(auth, blogList).post(auth, addBlog);
router
  .route("/single/:id")
  .get(auth, getSingleBlog)
  .post(auth, updateBlog)
  .delete(auth, deleteBlog);

module.exports = router;
