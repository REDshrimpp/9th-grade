// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');
const p1 = document.createElement('p');
const q2 = document.createElement('h1');
const p2 = document.createElement('p');
const q3 = document.createElement('h1');
const p3 = document.createElement('p');
const q4 = document.createElement('h1');
const p4 = document.createElement('p');
const ls = document.createElement('ol');
const l1 = document.createElement('li');
const l2 = document.createElement('li');
const l3 = document.createElement('li');
const l4 = document.createElement('li');
const l5 = document.createElement('li');
const l6 = document.createElement('li');
const l7 = document.createElement('li');
const l8 = document.createElement('li');
const l9 = document.createElement('li');
const l10 = document.createElement('li');
const ls2 = document.createElement('ol');
const p5 = document.createElement('p');
const credits = document.createElement('div')
const c = document.createElement('p');
const a = document.createElement('a');
const c2 = document.createElement('p');
const a2 = document.createElement('a');
const c3 = document.createElement('p');
const a3 = document.createElement('a');
const img = document.createElement('img');
const div = document.createElement('div')

//const image = document.createElement('')

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));
p1.append(document.createTextNode('HTML (Hypertext Markup Language) was developed to create a standard way to create and structure documents on the World Wide Web. It allows developers to create structured documents, including headings, paragraphs, images and links, that can be displayed in a web browser. It was created to simplify the process of creating and sharing documents online, so that anyone can create and view web pages with a consistent look and feel.'));
q2.append(document.createTextNode('What about using HTML for GUIs?'));
p2.append(document.createTextNode(`HTML can be used to create user interfaces for web applications, but it is primarily designed as a markup language for creating structured documents to be displayed in web browsers. While it can be used to create basic user interfaces, it is not typically considered a good choice for creating complex, interactive user interfaces. Other technologies such as JavaScript and CSS are typically used in conjunction with HTML to create more advanced user interfaces for web applications. Additionally, there are other technologies such as Electron, React Native and NativeScript that allow to create cross-platform desktop and mobile apps using web technologies such as HTML, CSS, and JavaScript.`));
q3.append(document.createTextNode('What are some of the main elements of HTML?'));
p3.append(document.createTextNode('Some of the main elements of HTML include:'))
ls.append(document.createTextNode(''));
l1.append(document.createTextNode('<html>: This is the root element of an HTML document, and it contains all of the other elements.'));
l2.append(document.createTextNode('<head>: This element contains information about the document, such as the title of the page, which is displayed in the browser\'s title bar or tab.'))
l3.append(document.createTextNode('<body>: This element contains the content of the document that is displayed in the browser window.'))
l4.append(document.createTextNode('<h1> to <h6>: These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest.'))
l5.append(document.createTextNode('<p>: This element is used for paragraphs of text.'))
l6.append(document.createTextNode('<a>: This element is used for hyperlinks, which allow users to navigate between pages on the web.'))
l7.append(document.createTextNode('<img>: This element is used to embed images in a web page.'));
l8.append(document.createTextNode('<ul> and <ol>: These elements are used for unordered and ordered lists, respectively.'));
l9.append(document.createTextNode('<li>: This element is used for list items.'));
l10.append(document.createTextNode('<div> and <span>: These elements are used for grouping and applying styles to elements on a web page.'));
ls2.append(document.createTextNode(''));
p4.append(document.createTextNode('These are some of the main elements, but there are many more available, like <header>, <nav>, <main>, <footer>, <form>, <input>, <select>, etc.'));
q4.append(document.createTextNode('Can you find a picture of the inventor of the web?'));
p5.append(document.createTextNode("I'm sorry, I am a text based model and I am not able to find or show images. However, I can tell you that the inventor of the World Wide Web (WWW) is Sir Tim Berners-Lee. He is a British computer scientist and is considered to be the inventor of the World Wide Web. He proposed and developed the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in 1989. He also created the first web browser, called WorldWideWeb, and the first web server, called httpd. He also wrote the first version of the HTML language, which provided the structure for web pages. He is currently working on a decentralized web project called Solid."));

credits.setAttribute('class', 'credits');
c.append(document.createTextNode('Text from 2023-01-14 conversation with'));
a.setAttribute('href', 'https://chat.openai.com/auth/login');
a.append(document.createTextNode('ChatGPT'));
c2.append(document.createTextNode('Photo of a young Tim Berners-Lee from'));
a2.setAttribute('href', "https:www.flickr.com/photos/itupictures/16662336315");
a2.append(document.createTextNode('Flickr'));
c3.append(document.createTextNode('no thanks to ChatGPT.'));
a3.setAttribute('href', 'https://creativecommons.org/licenses/by/2.0/');
a3.append(document.createTextNode('CC BY 2.0'));
img.append(document.querySelector("body > img"));

// Add the new H1 element to the body.
body.append(q1);
body.append(p1);
body.append(q2);
body.append(p2);
body.append(q3);
body.append(p3);
body.append(ls);
ls.append(l2);
ls.append(l3);
ls.append(l4);
ls.append(l5);
ls.append(l6);
ls.append(l7);
ls.append(l8);
ls.append(l9);
ls.append(l10);
body.append(ls2);
body.append(p4)
body.append(q4);
body.append(p5);
body.append(img);

body.append(credits);
credits.append(c);
c.append(a);
credits.append(c2);
c2.append(a2);
c2.append(c3);
c2.append(a3);

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.


// a change