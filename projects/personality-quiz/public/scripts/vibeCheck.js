//DEFINING THE VARIABLES
let score = 0
let firstClickTime;
let currentQuestion;
let timeTaken;

/*
const questions = [
  { desiredAnswer: false, question: 'do you pour the milk first?', influence: 5, asked: false, questionType: 'yes/no' },
  { desiredAnswer: false, question: 'do you like the sun?', influence: 1, asked: false, questionType: 'yes/no' },
  { desiredAnswer: false, question: 'do snakes intimidate you?', influence: 6, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'thoughts on boulders?', influence: 1, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'tu tienes que bebir la jugo sandia?', influence: 4, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'have you ever broken any bones?', influence: 3, asked: false, questionType: 'yes/no' },
  { desiredAnswer: false, question: 'do you like beige?', influence: 1, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'cats or dogs', influence: 1, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'do you like hoodies?', influence: 4, asked: false, questionType: 'yes/no' },
  { desiredAnswer: false, question: 'are you a morning person', influence: 3, asked: false, questionType: 'yes/no' },
  { desiredAnswer: false, question: 'dont you not own an air fryer?', influence: 2, asked: false, questionType: 'yes/no' },
  { desiredAnswer: false, question: 'would you be scared to pet a spikey lizard?', influence: 4, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'is long hair unnatractive?', influence: 7, asked: false, questionType: 'yes/no' },
  { desiredAnswer: true, question: 'is the ocean annoying?', influence: 4, asked: false, questionType: 'yes/no' },
  { desiredAnswer: '2', answer1: 'jump into a freezing lake', answer2: 'climb to the top of an 100 story building using the stairs', influence: 5, asked: false, questionType: 'rather' }
]
*/

const questions = [
  //{ desiredAnswer: false, question: 'no question', influence: 10, asked: false, questionType: 'yes/no' },
  //{ desiredAnswer: true, question: 'yes question', influence: 10, asked: false, questionType: 'yes/no' }
  {desiredAnswer: '2', answer1: 'wrong answer', answer2: 'right answer', influence: 10, asked: false, questionType: 'rather'},
  {desiredAnswer: '1', answer1: 'right answer', answer2: 'wrong answer', influence: 10, asked: false, questionType: 'rather'}
]

//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
const output = document.getElementById('output');
const yesNoButtonList = document.querySelectorAll('.yesNoButtons button');
const yesNoButtons = document.querySelector('.yesNoButtons');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const wouldYouRather = document.querySelector('.wouldYouRather');
const ratherQuestions = document.querySelectorAll('.wouldYouRather button')

//DISPLAY ANSWER

const calculateAnswer = (score) => {
  if (score > 0) {
    return 'YOU PASSED'
  }
  else if (score < 0) {
    return 'YOU DIDNT PASS'
  }
  else {
    return 'YOU ARE BALANCED'
  }
}

const displayAnswer = () => {
  yesNoButtons.style.display = 'none'
  question.style.display = 'none'
  restart.style.display = 'block'
  output.style.display = 'block'
  output.replaceChildren(calculateAnswer(score))
}

//RANDOM QUESTION FUNCTION

const randomQuestion = () => {
  const notAskedQuestions = (questions.filter((q) => !q.asked))
  return notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]
}

const calculatedInfluence = (timeTaken, questionInfluence) => {
  return Math.max(1, questionInfluence - timeTaken / 1000)
}

//RECORD ANSWER FUNCTIONS

const recordYesAnswer = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer) {
    score += calculatedInfluence(timeTaken, currentQuestion.influence)
  }
  else {
    score -= calculatedInfluence(timeTaken, currentQuestion.influence)
  }
}

const recordNoAnswer = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer) {
    score -= calculatedInfluence(timeTaken, currentQuestion.influence)
  }
  else {
    score += calculatedInfluence(timeTaken, currentQuestion.influence)
  }
}

const recordRatherQuestion1 = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer === '1') {
    score += calculatedInfluence(timeTaken, currentQuestion.influence)
  }
  else {
    score -= calculatedInfluence(timeTaken, currentQuestion.influence)
  }
}

const recordRatherQuestion2 = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer === '2') {
    score += calculatedInfluence(timeTaken, currentQuestion.influence)
  }
  else {
    score -= calculatedInfluence(timeTaken, currentQuestion.influence)
  }
}

//DISPLAY QUESTIONS

const displayYesNoQuestion = (currentQuestion) => {
  yesNoButtons.style.display = 'block'
  question.replaceChildren(currentQuestion.question)
}

const displayRatherQuestion = (currentQuestion) => {
  question.replaceChildren('wouldYouRather')
  ratherQuestions[0].innerHTML = (currentQuestion.answer1)
  ratherQuestions[1].innerHTML = (currentQuestion.answer2)
  wouldYouRather.style.display = 'block'
}

const changeQuestion = () => {
  currentQuestion = randomQuestion()
  if (quizIsDone()) {
    displayAnswer()
  }
  else {
    if (currentQuestion.questionType === 'yes/no') {
      displayYesNoQuestion(currentQuestion)
    }
    else if (currentQuestion.questionType === 'rather') {
      displayRatherQuestion(currentQuestion)
    }
  }
  firstClickTime = Date.now()
}

const quizIsDone = () => {
  return currentQuestion === undefined
}

const startQuiz = () => {
  score = 0
  output.style.display = 'none'
  start.style.display = 'none'
  restart.style.display = 'none'
  question.style.display = 'block'
  questions.forEach((q) => q.asked = false)
  firstClickTime = Date.now
  changeQuestion()
  console.log(score)
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
start.onclick = (e) => { startQuiz() }

restart.onclick = (e) => { startQuiz() }

yesNoButtonList[0].onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer()
  }
  else {
    yesNoButtons.style.display = 'none'
    timeTaken = Date.now() - firstClickTime
    recordYesAnswer(currentQuestion)
    changeQuestion()
  }
}

yesNoButtonList[1].onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    yesNoButtons.style.display = 'none'
    timeTaken = Date.now() - firstClickTime
    currentQuestion.asked = true
    changeQuestion()
  }
}

yesNoButtonList[2].onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    yesNoButtons.style.display = 'none'
    timeTaken = Date.now() - firstClickTime
    recordNoAnswer(currentQuestion)
    changeQuestion()
  }
}

ratherQuestions[0].onclick = (e) => {
  wouldYouRather.style.display = 'none'
  timeTaken = Date.now() - firstClickTime
  recordRatherQuestion1(currentQuestion)
  console.log(score)
  changeQuestion()
}

ratherQuestions[1].onclick = (e) => {
  recordRatherQuestion2(currentQuestion)
  wouldYouRather.style.display = 'none'
  timeTaken = Date.now() - firstClickTime
  recordRatherQuestion2(currentQuestion)
  console.log(score)
  changeQuestion()
}