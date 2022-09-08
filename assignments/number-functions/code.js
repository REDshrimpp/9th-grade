
function add (a,b) {
  return a+b;
}

function subtract (a,b) {
  return a-b
}

function multiply (a,b) {
  return a*b
}

function divide (a,b) {
  return a/b

}

function mod(a,b) {
  return a%b
}

const averageOfTwo = (a,b) => (a+b)/2

const averageOfThree = (a,b,c) => (a+b+c)/3

const distance = (a,b) => (Math.abs(a-b))

const manhattanDistance = (a,b,c,d) => (Math.abs(a-c)+Math.abs(b-d))

const euclideanDistance = (a,b,c,d) => (Math.sqrt((Math.abs(a,c)+Math.abs(b,d)**2))