const express = require("express");
const dbConnection = require("./dbConfig");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

// Import routes
const userRoutes = require("./routes/userRoute");
const answerRoutes = require("./routes/answerRoute");
const questionRoutes = require("./routes/questionRoute");


// JSON middleware to extract JSON data
app.use(express.json());

//user routes middleware file
app.use("/api/user", userRoutes);

// Question routes middleware
app.use("/api/question", questionRoutes);

// Answers routes middleware
app.use("/api/answer", answerRoutes);

const start = async () => {
  try {
    const result = await dbConnection.execute("select 'test' ");
    app.listen(PORT);
    console.log("Database connection established.");
  
    console.log(`Listening on http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
};

start();
