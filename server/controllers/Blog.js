const Blog = require("../model/Blog.js");

const handleBlogPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const newBlog = new Blog({
      title,
      content,
      author,
    });
    await newBlog.save();
    const Blogs = await Blog.find({ userid: { $in: userid } });

    res.status(201).json({ Blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleBlogPost };
