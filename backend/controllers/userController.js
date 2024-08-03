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

  // Validate request body

  // Check if user exists

  // Compare provided password with hashed password

  // Generate JWT token

  // Send successful response with token

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: "Email and password are required" });
  }

  try {
    const [user] = await dbConnection.query(
      "SELECT userid, username, password FROM users WHERE email = ?",
      [email]
    );

    if (user.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (isMatch) {
      const token = jwt.sign(
        { username: user[0].username, userid: user[0].userid },
        process.env.JWT_SECRET
      );
      res.status(HttpStatus.OK).json({
        message: "User login successful",
        token: token,
        username: user[0].username,
      });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

const checkUser = async (req, res) => {


};


module.exports = { register, login, checkUser };
