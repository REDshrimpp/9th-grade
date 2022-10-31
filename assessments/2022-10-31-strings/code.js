/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

//1

const firstHalf = (string) => {
  return string.substring(0,string.length / 2)
}

//2
const secondHalf = (string) => {
  return string.substring(string.length / 2, string.length)
}

//3
const upDown = (string) => {
  return string.toUpperCase () + string
}

//4
const firstFewEveryOther = (string) => {
  if (string.length > 4) {
    return string[0] + string[2] + string[4]
  }
}

//5
const upDownLastCharacter = (string) => {
  if (string.length > 1) {
    return stringsubstring(string.length - 1).toUpperCase() + string[string.length]
  }
}

//6
const firstAndLast = (string) => {
  if (string.length > 1) {
    return string[0] + string[string.length - 1]
  }
}

//7
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length) + string.substring(0, string.length / 2)
}

//8 NOTE
const simplePigLatin = (string, number) => {
  return string.substring(number, string.length) + string.substring(0,number)
}

//9
const randomCharacter = (string) => {
  return string[rand(string.length)]
}

//10
const randomCharacterUpDown = (string) => {
}

//11
const isAllUpperCase = (string) => {
}

//12
const sameIgnoringCase = (string, string2) => {
}

//13
const firstName = (string) => {
}

//14
const lastName = (string) => {
}

//15
const initials = (string) => {
}