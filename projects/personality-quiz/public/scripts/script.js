//DEFINING THE VARIABLES
let amountOfAnswers = 0
let currentQuestion = 0
let score = 0
const questions = [
  { charge: 'negative', question: 'do you pour the milk first?', influence: 5, asked: 'no' },
  { charge: 'negative', question: 'do you like the sun?', influence: 1, asked: 'no' },
  { charge: 'negative', question: 'do snakes intimidate you?', influence: 6 , asked: 'no' },
  { charge: 'positive', question: 'thoughts on boulders?', influence: 1 , asked: 'no' },
  { charge: 'positive', question: 'tu tienes que bebir la jugo sandia?', influence: 4 , asked: 'no' },
  { charge: 'positive', question: 'have you ever broken any bones?', influence: 3 , asked: 'no' },
  { charge: 'negaive', question: 'do you like beige?', influence: 1 , asked: 'no' },
  { charge: 'positive', question: 'cats or dogs', influence: 1 , asked: 'no' },
  { charge: 'positive', question: 'do you like hoodies?', influence: 4 , asked: 'no' },
  { charge: 'negative', question: 'are you a morning person', influence: 3 , asked: 'no' },
  { charge: 'negative', question: 'dont you not own an air fryer?', influence: 2 , asked: 'no' },
  { charge: 'negative', question: 'would you be scared to pet a spikey lizard?', influence: 4 , asked: 'no' },
  { charge: 'positive', question: 'is long hair unnatractive?', influence: 7 , asked: 'no' },
  { charge: 'positive', question: 'is the ocean annoying?', influence: 4 , asked: 'no' },]


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

//RANDOM QUESTION FUNCTION

const randomQuestion = () => {
  let selectedQuestion = questions[Math.floor(Math.random() * questions.length) + 1]
  while (selectedQuestion.asked !== 'no') {
    selectedQuestion = questions[Math.floor(Math.random() * questions.length) + 1]
  }
  return selectedQuestion
}

//RECORD ANSWER FUNCTIONS
const recordAnswer = (e) => {
  if (amountOfAnswers >= questions.length) {
    displayAnswer(score);
  }
  let selectedQuestion = randomQuestion();
  selectedQuestion.asked = 'yes'
  amountOfAnswers++;
  if (e.currentTarget === yes) {
    if (selectedQuestion.charge === 'positive') {
      score = score + questions[currentQuestion].influence
    }
    else if (selectedQuestion.charge === 'negative') {
      score = score - questions[currentQuestion].influence
    }
  }
  else if (e.currentTarget === no) {
    if (selectedQuestion.charge === 'negative') {
      score = score + questions[currentQuestion].influence
    }
    else if (selectedQuestion.charge === 'positive') {
      score = score - questions[currentQuestion].influence
    }
  }
  question.replaceChildren(selectedQuestion.question);
}

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
yes.onclick = recordAnswer;
no.onclick = recordAnswer;
