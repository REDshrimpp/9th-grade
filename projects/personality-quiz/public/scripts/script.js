////////////////////////////////////////////////////////////////////////////////
// Add a single paragraph dynamically

// Create a paragraph element
const p = document.createElement('p');
const p2 = document.createElement('h1');

// Create the text of the paragraph.
const text = document.createTextNode('This paragraph is created dynamically.');
p2.append(document.createTextNode('this is another paragraph that I added'))

// Add the text to the paragraph.
p.append(text);
p.append(p2);

// And add the new paragraph to the body of the document.
const body = document.body;
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

