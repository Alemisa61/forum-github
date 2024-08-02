const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const { StatusCodes } = require("http-status-codes");

const authMiddleware = async (req, res, next) => {

  //This line retrieves the Authorization header from the incoming request. This header typically contains the token in the format 'Bearer <token>'.
  

  //Check if the token is present and correctly formatted:
  

  // This line splits the Authorization header value by spaces and extracts the actual JWT token, which is the second part of the split result.
 
};

module.exports = authMiddleware;
