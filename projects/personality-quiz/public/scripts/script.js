////////////////////////////////////////////////////////////////////////////////
// Add a single paragraph dynamically


/*

// Create a paragraph element
const p = document.createElement('p');

// Create the text of the paragraph.
const text = document.createTextNode('This paragraph is created dynamically.');


// Add the text to the paragraph.
p.append(text);
p.append(p2);

// And add the new paragraph to the body of the document.

body.append(p);

////////////////////////////////////////////////////////////////////////////////
// Add ten paragraphs.

// Do the same thing as before but in a loop
for (let i = 0; i < 11; i++) {
  const p = document.createElement('p');
  p.append(document.createTextNode(`Counting ${i}.`));
  document.querySelector('body').append(p);
}

////////////////////////////////////////////////////////////////////////////////
// This function is an event handler. (Similar to the functions we used with
// registerOnclick in some of our old environments.)

//when the click happens everything in this function will run
const recordClick = (e) => {
  // Create a paragraph element.
  const p = document.createElement('p');

  // Create the text of the paragrph, using the event object we were passed
  const text = document.createTextNode(`Clicked on “${e.target.parentNode.innerText}”`);

  // Add the text to the paragraph
  p.append(text);

  // Add the paragraph to the body of the document
  document.getElementById('clicks').append(p);


};






const recordClick2 = (e) => {

  p2.append(document.createTextNode('foobar'))

}

body.append(p2)


p2.onclick = recordClick2

////////////////////////////////////////////////////////////////////////////////
// Add something to every existing paragraph.

const b = document.createElement('b');

document.querySelectorAll('p').forEach((p) => {
  // Create a bold element.


  // Create some text and add it to the bold element.
  b.append(document.createTextNode('Click me!'));
  c.append(document.createTextNode('click me'));

  // Register the recordClick function to handle when the bold element is
  // clicked.
  b.onclick = recordClick;

  // Append some text to the current paragraph.
  p.append(document.createTextNode(' '));

  // And finally append the bold element to the paragraph.
  p.append(b);

  //isolated click function

});

*/

//
// MY CODE
//




//DEFINING THE VARIABLES
let amountOfAnswers = 0
let currentQuestion = 0
const question1 = {charge:'positive', question:'QUESTION 1', influence: 3}
const question2 = {charge:'negative', question:'QUESTION 2', influence: 1}
const questions = [question1, question2]
const amountOfQuestions = questions.length

//ASSIGNING NAMES TO ELEMENTS
const answer = document.createElement('p');
const answer2 = document.createElement('p');
const question = document.createElement('h1');

//QUESTION RANDOMIZER

/*
const questionRandomizer = () => {
  let questionNumber = Math.floor(Math.random() * amountOfQuestions);
  let questions = ['question1', 'question2', 'question3', 'question4', 'question5']
  for(let x = 0; 0 < amountOfQuestions; x++) {
    return questions[questionNumber]
  }
}

*/

//SEQUENCE QUESTION SELECTOR

const sequenceQuestionSelector = () => {
  currentQuestion++
  for(let x = 0; 0 < amountOfQuestions; x++) {
    return questions[currentQuestion - 1]
  }
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
    quesntion.replaceChildren('YOU ARE BALANCED')
  }
}

//RECORD ANSWER FUNCTIONS
const recordAnswer1 = () => {
  amountOfAnswers++
  question.replaceChildren(sequenceQuestionSelector().question);
  console.log(amountOfAnsers)
  if (amountOfAnswers >= amountOfQuestions) {
    displayAnswer(amountOfAnsers, amountOf2Answers);
  }
}

const recordAnswer2 = () => {
  amountOfAnswers++
  score = score + questions[currentQuestion.influence]
  question.replaceChildren(sequenceQuestionSelector().question);
  console.log(amountOf2Answers)
  if (amountOfAnsers + amountOf2Answers >= amountOfQuestions) {
    displayAnswer(amountOfAnsers, amountOf2Answers);
  }
}

//MAKING THE TEXT NODES
answer.append('YES');
answer2.append('NO');
question.append('Select answer to begin')

//ASSIGNING CLICKING ELEMENTS TO FUNCTIONS
answer.onclick = recordAnswer1
answer2.onclick = recordAnswer2

//APPENDING ELEMENTS TO THE BODY
const body = document.body;
body.append(question);
body.append(answer);
body.append(answer2);