//db connection
const dbConnection = require("../dbConfig");

const { StatusCodes } = require("http-status-codes");

const getAnswers = async (req, res) => {

  const { question_id } = req.params;

  // Validate question_id
  if (!question_id) {
    return res.status(StatusCodes.NOT_FOUND).json({error:"Not Found",message:"The requested question could not be found."})
  }

  try {
    // Query to fetch answers for the specified question_id
    const answers = await dbConnection.query(
      "SELECT answer_id, content, user_name, created_at FROM answers WHERE question_id = ?",
      [question_id]
    );

    // Construct the response format
    const formattedAnswers = answers.map((answer) => ({
      answer_id: answer.answer_id,
      content: answer.content,
      user_name: answer.user_name,
      created_at: answer.created_at,
    }));

    // Send successful response with answers
    res.status(StatusCodes.OK).json({ answers: formattedAnswers });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
};

const postAnswer = async (req, res) => {
  // Get answer from body
  const { answer } = req.body;
  // Get question_id from URL parameters
  const { question_id } = req.params;

  // retrieve user info received from authentication middleware
  const user_name = req.user ? req.user.username : null;
  // Validate input
  if (
    question_id == null ||
    isNaN(question_id) ||
    !answer ||
    typeof answer !== "string"
  ) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Please provide both questionid and answer",
    });
  }
  // Validate if user is authenticated
  if (!userid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: "Unauthorized",
      message: "User is not authenticated.",
    });
  }
  try {
    // Insert the new answer into the database
    const [result] = await dbConnection
      .promise()
      .execute(
        "INSERT INTO answers (content, question_id, user_name) VALUES (?, ?, ?)",
        [answer, question_id, user_name]
      );

    // Check if the insertion was successful
    if (result.affectedRows === 1) {
      return res.status(StatusCodes.CREATED).json({
        message: "Answer posted successfully",
        answerid: result.insertid,
      });
    } else {
      throw new Error("Failed to insert answer into the database.");
    }
  } catch (error) {
    console.error("Database error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
};

module.exports = { postAnswer, getAnswers };
