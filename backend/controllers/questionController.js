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

const getAllQuestions = async (req, res) => {
  try {
    // Perform an SQL query to select specific columns from the 'questions' table,
    // joining it with the 'users' table based on matching 'user_name' and 'username'.
    // The results are ordered by 'id' in descending order.
    // The result of the query is destructured into the 'questions' variable.
    const [questions] = await dbConnection.query(
      "SELECT title,description,question_id,user_name FROM questions JOIN users ON users.username = questions.user_name ORDER BY id DESC"
    );
    // Send a response with HTTP status 200 (OK) and the queried data as JSON.
    // The data is wrapped in an object with a 'questions' property.
    return res.status(StatusCodes.OK).json({ questions });
  } catch (error) {
    console.log(error.message);
    // Send a response with HTTP status 500 (Internal Server Error) indicating that an unexpected error occurred.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred",
    });
  }
};


const getSingleQuestion = async (req, res) => {};
module.exports = { getAllQuestions, getSingleQuestion, postQuestion };
