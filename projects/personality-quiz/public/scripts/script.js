//DEFINING THE VARIABLES
let questionNumber = 0
let score = 0
let currentQuestion;
const questions = [
  { vibe: 'badVibes', question: 'do you pour the milk first?', influence: 5, asked: 'no' },
  { vibe: 'badVibes', question: 'do you like the sun?', influence: 1, asked: 'no' },
  { vibe: 'badVibes', question: 'do snakes intimidate you?', influence: 6, asked: 'no' },
  { vibe: 'goodVibes', question: 'thoughts on boulders?', influence: 1, asked: 'no' },
  { vibe: 'goodVibes', question: 'tu tienes que bebir la jugo sandia?', influence: 4, asked: 'no' },
  { vibe: 'goodVibes', question: 'have you ever broken any bones?', influence: 3, asked: 'no' },
  { vibe: 'badVibes', question: 'do you like beige?', influence: 1, asked: 'no' },
  { vibe: 'goodVibes', question: 'cats or dogs', influence: 1, asked: 'no' },
  { vibe: 'goodVibes', question: 'do you like hoodies?', influence: 4, asked: 'no' },
  { vibe: 'badVibes', question: 'are you a morning person', influence: 3, asked: 'no' },
  { vibe: 'badVibes', question: 'dont you not own an air fryer?', influence: 2, asked: 'no' },
  { vibe: 'badVibes', question: 'would you be scared to pet a spikey lizard?', influence: 4, asked: 'no' },
  { vibe: 'goodVibes', question: 'is long hair unnatractive?', influence: 7, asked: 'no' },
  { vibe: 'goodVibes', question: 'is the ocean annoying?', influence: 4, asked: 'no' }]


//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
const yes = document.getElementById('yesButton');
const no = document.getElementById('noButton');
const output = document.getElementById('output');

//DISPLAY ANSWER

const displayAnswer = (score) => {
  yes.replaceChildren('')
  no.replaceChildren('')
  question.replaceChildren('')
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
  const notAskedQuestions = (questions.filter((q) => q.asked === 'no'))
  return notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]
}

//RECORD ANSWER FUNCTIONS

const recordYesAnswer = (currentQuestion) => {
  currentQuestion.asked = 'yes'
  if (currentQuestion.vibe === 'goodVibes') {
    score += currentQuestion.influence
  }
  else if (currentQuestion.vibe === 'badVibes') {
    score -= currentQuestion.influence
  }
}

const recordNoAnswer = (currentQuestion) => {
  currentQuestion.asked = 'yes'
  if (currentQuestion.vibe = 'goodVibes') {
    score -= currentQuestion.influence
  }
  else if (currentQuestion.vibe = 'badVibes') {
    score += currentQuestion.influence
  }
}

const changeQuestion = () => {
  currentQuestion = randomQuestion()
  question.replaceChildren(currentQuestion.question)
}

const startQuiz = () => {
  questionNumber = 0
  //questions.map((q) => q.asked = 'no')
  changeQuestion()
  yes.replaceChildren('yes')
  no.replaceChildren('no')
  output.replaceChildren('')
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
output.onclick = (e) => { startQuiz() }

yes.onclick = (e) => {
  if (questionNumber + 1 === questions.length) {
    displayAnswer(score)
  }
  else {
    recordYesAnswer(currentQuestion)
    changeQuestion()
    questionNumber++
  }
}

no.onclick = (e) => {
  if (questionNumber + 1 === questions.length) {
    displayAnswer(score)
  }
  else {
    recordNoAnswer(currentQuestion)
    changeQuestion()
    questionNumber++
  }
}