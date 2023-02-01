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

//defining the answercount variable
let amountOf1Answers = 0
let amountOf2Answers = 0
let output = 'start'

//creating the answer elements
const answer = document.createElement('h1');
const answer2 = document.createElement('h1');
const response = document.createElement('p');

//creating the question text
answer.append('ANSWER 1');
answer2.append('ANSWER 2');
response.append(output);

//creating the onclick function
const recordAnswer1 = () => {
  output = 'foobar'
  amountOf1Answers++
  console.log(amountOf1Answers)
}

const recordAnswer2 = () => {
  output = 'barfoo'
  amountOf2Answers++
  console.log(amountOf2Answers)
}

//assigning the click function
answer.onclick = recordAnswer1
answer2.onclick = recordAnswer2

const body = document.body;
body.append(answer);
body.append(answer2);
body.append(response);

//OUTPUT FUNCTION
