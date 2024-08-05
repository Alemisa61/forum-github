const dbConnection = require("../dbConfig");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");


const postQuestion = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide all required fields" });
  }
  try {
    const question_id = uuidv4();
  ///Will need to add created_at column in the db and insert the value now()
    await dbConnection.query(
      "insert into questions (question_id,title, description,user_name) values (?, ?,?,?)",
      [question_id, title, description, req.user.username]
    );
    return res
      .status(StatusCodes.OK)
      .json({ msg: "Question added successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error.",
      message: "An unexpected error occurred.",
    });
  }
};

const getAllQuestions = async (req, res) => {};

const getSingleQuestion = async (req, res) => {};
module.exports = { getAllQuestions, getSingleQuestion, postQuestion };
