////////////////////////////////////////////////////////////////
// Write your code here ...




////////////////////////////////////////////////////////////////
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const vowels = 'aeiou'

const isVowel = (letter) => {
  for (let x = 0; x < vowels.length; x++) {
    if (letter === vowels[x]) {
      return true
    }
  }
  return false
}

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const mod = (n, m) => ((n % m) + m) % m;

const rotate = (char, places) => {
  const lower = char.toLowerCase();
  const i = alphabet.indexOf(lower);
  if (i === -1) {
    return char;
  } else {
    const rotated = alphabet[mod(i + places, alphabet.length)];
    return lower === char ? rotated : rotated.toUpperCase();
  }
}

const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  else {
    return n * factorial(n - 1)
  }
}

const fibbonacci = (n) => {
  if (n === 0) {
    return 0
  }
  if (n < 1) {
    return 1
  }
  else {
    return fibbonacci(n - 1) + fibbonacci(n - 2)
  }
}

const sumSquares = (n) => {
  if (n < 2) {
    return n**2
  }
  else {
    return n**2 + sumSquares(n - 1)
  }
}

const maximum = (array) => {
  if (array.length === 0) {
    return -Infinity
  }
  else {
    return Math.max(array[0], maximum(array.slice(1)))
  }
}

//NOTE
const treeMap = (tree, func) => {
  if (isLeaf(tree)) {
    return 
  }
  else {
    return treeMap
  }
}

const sumPrimesBelow = (n) => {
  if (n === 2) {
    return 2
  }
  else if (isPrime(n)) {
    return n + sumPrimesBelow(n - 1)
  }
  else {
    return sumPrimesBelow(n - 1)
  }
}

const nvwls = (string) => {
  if (string.length === 0) {
    return ''
  }
  else if (isVowel(string[0])) {
    return nvwls(string.slice(1))
  }
  else {
    return string[0] + nvwls(string.slice(1))
  }
}

const caesar = (string, key) => {
  if (string.length === 0) {
    return ''
  }
  else {
    return rotate(string[0], key) + caesar(string.slice(1), key)
  }
}

const toList = (array) => {
  if (array.length === 0) {
    return null
  }
  else {
    return {first: array[0], rest: toList(array.slice(1))}
  }
}

const map = (list, func) => {
  if (list.rest === null) {
    return list
  }
  else {
    return func(list.first) + map(list.rest, func)
  }
}