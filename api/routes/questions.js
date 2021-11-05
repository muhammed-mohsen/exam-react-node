const { Question, validate } = require("../models/question");
const express = require("express");
const { shuffleChoicesInQuestions } = require("../utils/helper");
const router = express.Router();

router.get("/", async (req, res) => {
  const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
  const shuffeledQuestionWithChoice = shuffleChoicesInQuestions(questions);
  res.send(shuffeledQuestionWithChoice);
});

module.exports = router;
