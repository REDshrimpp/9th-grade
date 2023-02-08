//DEFINING THE VARIABLES
let amountOfAnswers = 0
let currentQuestion = 0
let score = 0
const questions = [
  { charge: 'positive', question: 'QUESTION 1', influence: 3 },
  { charge: 'negative', question: 'QUESTION 2', influence: 1 }]

//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

//SEQUENCE QUESTION SELECTOR

const sequenceQuestionSelector = () => {
  return questions[currentQuestion++]
}

//DISPLAY ANSWER

const displayAnswer = (score) => {
  if (score > 0) {
    question.replaceChildren('YOU ARE RESULT 1')
  }
  else if (score < 0) {
    question.replaceChildren('YOU ARE RESULT 2')
  }

  else {
    question.replaceChildren('YOU ARE BALANCED')
  }
}

//RECORD ANSWER FUNCTIONS
const recordAnswer = (e) => {
  console.log('foobar')
  //console.log(e.currentTarget)
  if (e.currentTarget === 'yes') {
    if (questions[currentQuestion].charge === 'positive') {
      score = score + questions[currentQuestion].influence
    }
    else if (questions[currentQuestion] === 'negative') {
      score = score - questions[currentQuestion].influence
    }
  }
  else if (e.currentTarget === answer2) {
    if (questions[currentQuestion] === 'negative') {
      score = score - questions[currentQuestion].influence
    }
    else if (questions[currentQuestion] === 'positive') {
      score = score + questions[currentQuestion.influence]
    }
  }
  amountOfAnswers++
  question.replaceChildren(sequenceQuestionSelector().question);
  if (amountOfAnswers >= questions.length) {
    displayAnswer(score)
  }
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
yes.onclick = recordAnswer
no.onclick = recordAnswer
