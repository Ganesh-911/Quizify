let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`, "#dc2626"));

console.log("\nPlease select any options by typing either a/b/c/d\n");

/** Creating data set */
const database = {
  data: [
    {
  question: "What is the output of 'typeof NaN' in JavaScript?",
  options: {
    a: "undefined",
    b: "number",
    c: "NaN",
    d: "object",
  },
  correctAnswer: "b",
},
{
  question: "Which method is used to convert JSON to a JavaScript object?",
  options: {
    a: "JSON.stringify()",
    b: "JSON.parse()",
    c: "JSON.toObject()",
    d: "JSON.convert()",
  },
  correctAnswer: "b",
},
{
  question: "What keyword is used to declare a constant in JavaScript?",
  options: {
    a: "var",
    b: "let",
    c: "const",
    d: "static",
  },
  correctAnswer: "c",
},
    {
      question: `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(targer, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

/** Creating Leader Board*/
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 3,
    },
    {
      name: "Riya",
      score: 6,
    },
    {
      name: "Jay",
      score: 5,
    },
  ],
};

/** Main Logic */
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"));
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer - (a/b/c/d) - ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(
    kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047")
  );
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} -  Score: ${leader.score}`, "#9333ea"));
  }
}


showQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${score}`, "#5eead4"));
showHighScorer(leaderBoard);