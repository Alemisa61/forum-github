const dbConnection = require("../dbConfig");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");

const postQuestion = async (req, res) => {
  ///Will need to add created_at column in the db and insert the value now()
};

const getAllQuestions = async (req, res) => {};

const getSingleQuestion = async (req, res) => {
  const id = req.params.question_id;
  try {
    const [question] = await dbConnection.query(
      "SELECT * FROM questions WHERE question_id =?",
      [id]
    );
    if (question.length == 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "Not Found",
        message: "The requested question could not be found.",
      });
    }
    return res.status(StatusCodes.OK).json({ question });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
};
module.exports = { getAllQuestions, getSingleQuestion, postQuestion };
