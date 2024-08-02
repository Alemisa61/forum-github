//db connection
const dbConnection = require("../dbConfig");

const { StatusCodes } = require("http-status-codes");

const getAnswers = async (req, res) => {
  // Validate question_id

  // Query to fetch answers for the specified question_id

  // Check if any answers were found
  
  // Send successful response with answers
};

const postAnswer = async (req, res) => {
  // Get answer from body

  // Get question_id from URL parameters

  // retrieve user info received from authentication middleware

  // Validate input

  // Validate if user is authenticated

  // Insert the new answer into the database

  // Check if the insertion was successful
};

module.exports = { getAnswers, postAnswer };
