//DEFINING THE VARIABLES
let questionNumber = 0
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
  { desiredAnswer: true, question: 'is the ocean annoying?', influence: 4, asked: false, questionType: 'yes/no' }
 // { desiredAnswer: true, question1: 'question1', question2: 'question2', influence: 5, asked: false, questionType: 'rather'}
]


//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const output = document.getElementById('output');
const eh = document.getElementById('eh');
const answerButtons = document.querySelector('.answerButtons')
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const startButtons = document.querySelector('startButtons')
const wouldYouRather1 = document.getElementById('wouldYouRatherAnswer1')
const wouldYouRather2 = document.getElementById('wouldYouRatherAnswer2')

//DISPLAY ANSWER

const displayAnswer = (score) => {
  answerButtons.style.display = 'none'
  question.replaceChildren('')
  restart.style.display = 'block'
  if (score > 0) {
    output.replaceChildren('you passed')
  }
  else if (score < 0) {
    output.replaceChildren('you didnt pass')
  }
  else {
    output.replaceChildren('YOU ARE BALANCED')
  }
}

//RANDOM QUESTION FUNCTION

const randomQuestion = () => {
  const notAskedQuestions = (questions.filter((q) => q.asked === false))
  console.log(notAskedQuestions)
  return notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]
}

//RECORD ANSWER FUNCTIONS

const recordYesAnswer = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer) {
    score += currentQuestion.influence
  }
  else if (!currentQuestion.desiredAnswer) {
    score -= currentQuestion.influence
  }
}

const recordNoAnswer = (currentQuestion) => {
  currentQuestion.asked = true
  if (currentQuestion.desiredAnswer) {
    score -= currentQuestion.influence
  }
  else if (!currentQuestion.desiredAnswer) {
    score += currentQuestion.influence
  }
}

const displayYesNoQuestion = (currentQuestion) => {
  question.replaceChildren(currentQuestion.question)
}

const displayRatherQuestion = (currentQuestion) => {
  question.replaceChildren('wouldYouRather')
  wouldYouRather1.replaceChildren(currentQuestion.question1)
  wouldYouRather2.replaceChildren(currentQuestion.question2)
  wouldYouRather1.display = 'block'
  wouldYouRather2.display = 'block'
}

const changeQuestion = () => {
  currentQuestion = randomQuestion()
  //console.log(currentQuestion)
  if (currentQuestion.questionType = 'yes/no') {
    displayYesNoQuestion(currentQuestion)
}
else if (currentQuestion.questionType = 'rather') {
  displayRatherQuestion(currentQuestion)
}
}

const quizIsDone = () => {
  return questionNumber + 1 === questions.length
}

const startQuiz = () => {
  questionNumber = 0
  answerButtons.style.display = 'block'
  start.style.display = 'none'
  restart.style.display = 'none'
  questions.map((q) => q.asked = false)
  changeQuestion()
  yes.replaceChildren('yes')
  no.replaceChildren('no')
  output.replaceChildren('')
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
start.onclick = (e) => { startQuiz() }

restart.onclick = (e) => { startQuiz() }

yes.onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    recordYesAnswer(currentQuestion)
    changeQuestion()
    questionNumber++
  }
}

no.onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    recordNoAnswer(currentQuestion)
    changeQuestion()
    questionNumber++
  }
}

eh.onclick = (e) => {
  if (quizIsDone()) {
    displayAnswer(score)
  }
  else {
    changeQuestion()
    questionNumber++
  }
}