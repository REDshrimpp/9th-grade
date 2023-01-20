// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');
const p1 = document.createElement('p');

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));
p1.append(document.createTextNode('This is going to be the paragraph lets see if it works'));
//p1.append(document.)

// Add the new H1 element to the body.
body.append(q1);
body.append(p1);


ol
li


// Create a new P element.
const a1 = document.createElement('p');
const a2 = document.createElement('p');

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);

// Add the new P element to the body.
body.append(a1);

