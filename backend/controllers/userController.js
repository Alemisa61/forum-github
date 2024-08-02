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
};

const checkUser = async (req, res) => {


};


module.exports = { register, login, checkUser };
