//DEFINING THE VARIABLES
let amountOfAnswers = 0
let currentQuestion = 0
const questions = [
  { charge: +, question: 'QUESTION 1', influence: 3 },
  { charge: 'negative', question: 'QUESTION 2', influence: 1 }]

//ASSIGNING NAMES TO ELEMENTS
const answer = document.createElement('p');
const answer2 = document.createElement('p');
const question = document.createElement('h1');

//SEQUENCE QUESTION SELECTOR

const sequenceQuestionSelector = () => {
  return questions[currentQuestion++]
}

//DISPLAY ANSWER

const displayAnswer = (score) => {
  answer.replaceChildren('')
  answer2.replaceChildren('')
  question.replaceChildren('')
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
  console.log(e.currentTarget)
  if (e.currentTarget === answer) {
    if (questions[currentQuestion] === 'positive') {
      score = score + questions[currentQuestion].influence
    }
    else if (questions[currentQuestion] === 'negative') {
      score = score - questions[currentQuestion.influence]
    }
  }
  else if (e.currentTarget === answer2) {
    if (questions[currentQuestion] === 'negative') {
      score = score - questions[currentQuestion.influence]
    }
    else if (questions[currentQuestion] === 'positive') {
      score = score + questions[currentQuestion.influence]
    }
  }
  amountOfAnswers++
  question.replaceChildren(sequenceQuestionSelector().question);
  if (amountOfAnswers >= questions.length) {
    displayAnswer(score);
  }
}

//MAKING THE TEXT NODES
answer.append('YES');
answer2.append('NO');
question.append('Select answer to begin')

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
answer.onclick = recordAnswer
answer2.onclick = recordAnswer

//APPENDING ELEMENTS TO THE BODY
const body = document.body;
body.append(question);
body.append(answer);
body.append(answer2);