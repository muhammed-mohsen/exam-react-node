const shuffleArray = (array, n) => {
  let shuffled = array.sort(function () {
    return 0.5 - Math.random();
  });

  return shuffled.slice(0, n);
};
function shuffleChoicesInQuestions(array) {
  let suffeledArrayWithChoice = array.map((item) => ({
    ...item,
    choices: shuffleArray(item.choices, 4),
  }));

  return suffeledArrayWithChoice;
}

module.exports = {
  shuffleChoicesInQuestions,
};
