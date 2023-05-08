//DEFINING THE VARIABLES
let score = 0
let currentQuestion;
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


//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
//const yes = document.getElementById('yes');
//const no = document.getElementById('no');
const output = document.getElementById('output');
//const eh = document.getElementById('eh');
const yesNoButtonList = document.querySelectorAll('.yesNoButtons button');
const yesNoButtons = document.querySelector('.yesNoButtons');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const startButtons = document.querySelector('#startButtons button');
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

//RECORD ANSWER FUNCTIONS

const recordYesAnswer = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer) {
    score += currentQuestion.influence
  }
  else {
    score -= currentQuestion.influence
  }
}

const recordNoAnswer = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer) {
    score -= currentQuestion.influence
  }
  else {
    score += currentQuestion.influence
  }
}

const recordRatherQuestion1 = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer === '1') {
    score += currentQuestion.influence
  }
  else {
    score -= currentQuestion.influence
  }
}

const recordRatherQuestion2 = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer === '2') {
    score += currentQuestion.influence
  }
  else {
    score -= currentQuestion.influence
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
      console.log('test')
      displayYesNoQuestion(currentQuestion)
    }
    else if (currentQuestion.questionType === 'rather') {
      displayRatherQuestion(currentQuestion)
    }
  }
}

const quizIsDone = () => {
  return currentQuestion === undefined
}

const startQuiz = () => {
  output.style.display = 'none'
  start.style.display = 'none'
  restart.style.display = 'none'
  question.style.display = 'block'
  questions.forEach((q) => q.asked = false)
  changeQuestion() //problem area
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
start.onclick = (e) => { startQuiz() }

restart.onclick = (e) => { startQuiz() }

yesNoButtonList[0].onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer()
  }
  else {
    recordYesAnswer(currentQuestion)
    yesNoButtons.style.display = 'none'
    changeQuestion()
  }
}

yesNoButtonList[1].onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    currentQuestion.asked = true
    yesNoButtons.style.display = 'none'
    changeQuestion()
  }
}

yesNoButtonList[2].onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    recordNoAnswer(currentQuestion)
    yesNoButtons.style.display = 'none'
    changeQuestion()
  }
}

ratherQuestions[0].onclick = (e) => {
    recordRatherQuestion1(currentQuestion)
    wouldYouRather.style.display = 'none'
    changeQuestion()
}

ratherQuestions[1].onclick = (e) => {
    recordRatherQuestion2(currentQuestion)
    wouldYouRather.style.display = 'none'
    changeQuestion()
}