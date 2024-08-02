const router = require("express").Router();

//Question controllers
const { postQuestion, getAllQuestions, getSigleQuestion} = require("../controllers/questionController");

//auth Middleware
const authMiddleware = require("../middlewares/authMiddleware");

//All Questions route
router.get("/allQuestions", authMiddleware, getAllQuestions);

//Single Question route
router.get("/:question_id", authMiddleware, getSigleQuestion);

// Post a Question route
router.post("/", authMiddleware, postQuestion);

module.exports = router;
