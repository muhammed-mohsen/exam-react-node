// Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const questions = require("./routes/questions");

const express = require("express");
var cors = require("cors");
const { Question, validate } = require("./models/question");

const creatQuestion = async () => {
  for (let index = 0; index < 20; index++) {
    const question = await new Question({
      question: "question number " + index,
      choices: ["answer 100", "answer 101", "answer 102", "answer" + index],
      correctAnswer: "answer" + index,
    });
    await question.save();
  }
};

const app = express();

mongoose
  .connect("mongodb://localhost/exam")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/questions", questions);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
creatQuestion();
