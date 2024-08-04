//db connection
const dbConnection = require("../dbConfig");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {

  // Validate request body

  // Check for existing user

  //encrypt password

  // Create new user
};


const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Please provide all required fields",
    });
  }

  try {
    const [user] = await dbConnection.query(
      "SELECT userid, username, password FROM users WHERE email = ?",
      [email]
    );

    if (user.length === 0) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (isMatch) {
      const token = jwt.sign(
        { username: user[0].username, userid: user[0].userid },
        process.env.JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hour
      );
      res.status(200).json({
        message: "User login successful",
        token: token,
      });
    } else {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Invalid credentials" });
    }
  } catch (error) {
    // console.error("Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred",
    });
  }
};


const checkUser = async (req, res) => {


};


module.exports = { register, login, checkUser };
