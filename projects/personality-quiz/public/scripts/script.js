//DEFINING THE VARIABLES
let goodVibes = 0
let badVibes = 0
const questions = [
  { vibe: badVibes, question: 'do you pour the milk first?', influence: 5, asked: 'no' },
  { vibe: badVibes, question: 'do you like the sun?', influence: 1, asked: 'no' },
  { vibe: badVibes, question: 'do snakes intimidate you?', influence: 6, asked: 'no' },
  { vibe: goodVibes, question: 'thoughts on boulders?', influence: 1, asked: 'no' },
  { vibe: goodVibes, question: 'tu tienes que bebir la jugo sandia?', influence: 4, asked: 'no' },
  { vibe: goodVibes, question: 'have you ever broken any bones?', influence: 3, asked: 'no' },
  { vibe: badVibes, question: 'do you like beige?', influence: 1, asked: 'no' },
  { vibe: goodVibes, question: 'cats or dogs', influence: 1, asked: 'no' },
  { vibe: goodVibes, question: 'do you like hoodies?', influence: 4, asked: 'no' },
  { vibe: badVibes, question: 'are you a morning person', influence: 3, asked: 'no' },
  { vibe: badVibes, question: 'dont you not own an air fryer?', influence: 2, asked: 'no' },
  { vibe: badVibes, question: 'would you be scared to pet a spikey lizard?', influence: 4, asked: 'no' },
  { vibe: goodVibes, question: 'is long hair unnatractive?', influence: 7, asked: 'no' },
  { vibe: goodVibes, question: 'is the ocean annoying?', influence: 4, asked: 'no' },]


//ASSIGNING NAMES TO ELEMENTS
const question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

//DISPLAY ANSWER

const displayAnswer = (goodVibes, badVibes) => {
  const score = goodVibes - badVibes
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
const recordAnswer = (e) => { //}, vibe, influence, questionNumber) => {
  //let selectedQuestion = randomQuestion();
  //selectedQuestion.asked = 'yes'
  if (e.currentTarget === yes) {
    vibe = vibe + influence
  }
  else if (e.currentTarget === no) {
    vibe = vibe - influence
  }
  console.log(questionNumber)
  console.log(questions[questionNumber])
  //question.replaceChildren(questions[questionNumber].question);
}

const personalityQuiz = (questions) => {
  yes.onclick = recordAnswer;
  no.onclick = recordAnswer;
  for (let x = 0; x < questions.length; x++) {
    recordAnswer(questions[x].vibe, questions[x].influence, x)
  }
  //displayAnswer(goodVibes, badVibes);
}

personalityQuiz(questions);

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
//yes.onclick = recordAnswer;
//no.onclick = recordAnswer;
