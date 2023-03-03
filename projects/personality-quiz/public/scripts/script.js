//DEFINING THE VARIABLES
let questionNumber = 0
let score = 0
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
  { vibe: 'goodVibes', question: 'is the ocean annoying?', influence: 4, asked: 'no' },]


//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const output = document.getElementById('output');

//DISPLAY ANSWER

const displayAnswer = (score) => {
  console.log(score)
  if (score > 0) {
    question.replaceChildren('you passed')
  }
  else if (score < 0) {
    question.replaceChildren('you didnt pass')
  }
  else {
    question.replaceChildren('YOU ARE BALANCED')
  }
}

//RANDOM QUESTION FUNCTION

const randomQuestion = () => {
  let selectedQuestion = questions[Math.floor(Math.random() * questions.length) + 1]
  if (selectedQuestion.asked !== 'no') {
    while (selectedQuestion.asked !== 'no') {
      selectedQuestion = questions[Math.floor(Math.random() * questions.length) + 1]
    }
  }
  return selectedQuestion
}

//RECORD ANSWER FUNCTION
const recordYesAnswer = (currentQuestion) => {
  //selectedQuestion.asked = 'yes'
  if (currentQuestion.vibe === 'positive') {
    score += currentQuestion.influence
  }
  else if (currentQuestion.vibe === 'negative') {
    score -= currentQuestion.influence
  }
}

const recordNoAnswer = (currentQuestion) => {
  if (currentQuestion.vibe = 'positive') {
    score -= currentQuestion.influence
  }
  else if (currentQuestion.vibe = 'negative') {
    score += currentQuestion.influence
  }
}

const displayQuestion = (currentQuestion) => {
  question.replaceChildren(currentQuestion.question)
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
output.onclick = (e) => {
  displayQuestion(questions[questionNumber])
  yes.replaceChildren('yes')
  no.replaceChildren('no')
  output.replaceChildren('')
}

yes.onclick = (e) => {
  recordYesAnswer(questions[questionNumber])
  questionNumber++
  displayQuestion(questions[questionNumber])
}

no.onclick = (e) => {
  recordNoAnswer(question[questionNumber])
  questionNumber++
  displayQuestion(questions[questionNumber])
}