const dbConnection = require("../dbConfig");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");

const postQuestion = async (req, res) => {
  ///Will need to add created_at column in the db and insert the value now()
};

const getAllQuestions = async (req, res) => {};

const getSingleQuestion = async (req, res) => {};
module.exports = { getAllQuestions, getSingleQuestion, postQuestion };
