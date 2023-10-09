const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Author = require("../model/Author.js");

/* REGISTER Author */
const handleRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAuthor = new Author({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Login IN */
const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const author = await Author.findOne({ email: email });
    if (!author) {
      return res.status(400).json({ msg: "Author does not exist. " });
    }

    const isMatch = await bcrypt.compare(password, author.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials. " });
    }

    const token = jwt.sign({ id: author._id }, process.env.JWT_SECRET);
    delete author.password;
    res.status(200).json({ token, author });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleLogin, handleRegister };
