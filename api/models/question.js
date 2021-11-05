const Joi = require("joi");
const mongoose = require("mongoose");

const Question = mongoose.model(
  "questions",
  new mongoose.Schema({
    question: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },

    choices: [String],
    correctAnswer: {
      type: String,
      required: true,
    },
  })
);

function validateQuestion(questions) {
  const schema = {
    question: Joi.string().min(5).max(50).required(),
    choices: Joi.array().max(3).required(),
    correctAnswer: Joi.string().required(),
  };

  return Joi.validate(questions, schema);
}

exports.Question = Question;
exports.validate = validateQuestion;
