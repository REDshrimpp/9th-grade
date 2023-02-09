//DEFINING THE VARIABLES
let amountOfAnswers = 0
let currentQuestion = 0
let score = 0
const questions = [
  { charge: 'negative', question: 'do you poor the milk first?', influence: 5 },
  { charge: 'negative', question: 'do you like the sun?', influence: 1 },
  { charge: 'negative', question: 'do snakes intimidate you?', influence: 6 },
  { charge: 'positive', question: 'thoughts on boulders?', influence: 1 },
  { charge: 'positive', question: 'tu tienes que bebir la jugo sandia?', influence: 4 },
  { charge: 'positive', question: 'have you ever broken any bones?', influence: 3 },
  { charge: 'negaive', question: 'do you like beige?', influence: 1 },
  { charge: 'positive', question: 'cats or dogs', influence: 1 },
  { charge: 'positive', question: 'do you like hoodies?', influence: 4 },
  { charge: 'negative', question: 'are you a morning person', influence: 3 },
  { charge: 'negative', question: 'dont you not own an air fryer?', influence: 2 },
  { charge: 'negative', question: 'would you be scared to pet a spikey lizard?', influence: 4 },
  { charge: 'positive', question: 'is long hair unnatractive?', influence: 7 },
  { charge: 'positive', question: 'is the ocean annoying?', influence: 4 },]


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
    question.replaceChildren('you passed')
  }
  else if (score < 0) {
    question.replaceChildren('you didnt pass')
  }

  else {
    question.replaceChildren('YOU ARE BALANCED')
  }
}

//RECORD ANSWER FUNCTIONS
const recordAnswer = (e) => {
  amountOfAnswers++;
  if (amountOfAnswers >= questions.length) {
    displayAnswer(score);
  }
  if (e.currentTarget === yes) {
    if (questions[currentQuestion].charge === 'positive') {
      score = score + questions[currentQuestion].influence
    }
    else if (questions[currentQuestion].charge === 'negative') {
      score = score - questions[currentQuestion].influence
    }
  }
  else if (e.currentTarget === no) {
    if (questions[currentQuestion].charge === 'negative') {
      score = score + questions[currentQuestion].influence
    }
    else if (questions[currentQuestion].charge === 'positive') {
      score = score - questions[currentQuestion].influence
    }
  }
  question.replaceChildren(sequenceQuestionSelector().question);
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
yes.onclick = recordAnswer;
no.onclick = recordAnswer;
