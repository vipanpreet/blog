const Blog = require("../models/blogModel.js");

exports.blogList = async (req, res) => {
  let sort = {};
  // let query = {};
  const { sortby = "createdAt", sortdirection = "desc", pagenumber = 1, pagesize = 30 } = req.query;

  try {
    // searchterm && (query.name = { $regex: searchterm, $options: "i" });
    // repetitiontype && (query.repetitionType = repetitiontype);
    sort[String(sortby)] = sortdirection;

    const blogs = await Event.find({})
      .sort(sort)
      .limit(Number(pagesize))
      .skip(pagesize * (pagenumber - 1));

    const totalBlogsCount = await Customer.countDocuments({});

    return res.status(200).json({
      blogs,
      totalBlogsCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "There is an error while getting blogs" });
  }
};

exports.addBlog = async (req, res) => {
  try {
    req.body.isDraft = false;

    let event = await new Blog(req.body).save();

    if (event) {
      res.status(200).json({ message: "Blog Added" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: "Error Creating blog." });
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await Blog.findOneAndUpdate(
          { _id: req.param.id },
          { $inc: { viewCount: 1 } },
          { new: true }
        )
      );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error while fetching blog." });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    res.status(200).json(await Blog.updateOne({ _id: req.param.id }, req.body));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error while updating blog." });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    res.status(200).json(await Blog.deleteOne({ _id: req.param.id }));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error while deleting blog." });
  }
};
