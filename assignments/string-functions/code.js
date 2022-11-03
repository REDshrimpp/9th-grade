//findFnord
const findFnord = (string) => {
  return string.indexOf("Fnord")
}

//string contains
const stringContains = (string1, string2) => {
  if (string1.search([string2]) !== -1) {
    return true
  }
  else
    return false
}

//first and last
const firstAndLast = (string) => {
    return string[0] + string[string.length - 1]
}

//swap front and back
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length) + string.substring(0, string.length / 2)
}

//simple pig latin
const simplePigLatin = (word, indexOfVowel) => {
  return word.substring(indexOfVowel, word.length) + word.substring(0, indexOfVowel) + 'ay'
}

//is all upper case
const isAllUpperCase = (string) => {
  return string === string.toUpperCase()
}

//same ignoring case
const sameIgnoringCase = (string1, string2) => {
  return string1.toUpperCase() === string2.toUpperCase()
}

//first half
const firstHalf = (string) => {
return string.substring(0, string.length / 2)
}

//second half
const secondHalf = (string) => {
  return string.substring(string.length / 2, string.length)
}

//up down
const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase()
}

//every other
const everyOther = (string) => {
  return string[0] + string[2] + string[4]
}

//up down last character
const upDownLastCharacter = (string) => {
  return string[string.length - 1].toUpperCase() + string[string.length - 1].toLowerCase()
}
//first name
const firstName = (fullName) => {
  return fullName.substring(0,fullName.search(/[' ']/))
}

//last name
const lastName = (fullName) => {
  return fullName.substring(fullName.search(/[' ']/) + 1, fullName.length)
}

//concatenate
const concatenate = (string1, string2) => {
  return string1 + string2
}

//first character
const firstCharacter = (string) => {
  return string[0]
}

//last character
const lastCharacter = (string) => {
  return string[string.length - 1]
}

//all but first
const allButFirst = (string) => {
  return string.substring(1, string.length)
}

//first three
const firstThree = (string) => {
  return string.substring(0,3)
}

//all but first and last
const allButFirstAndList = (string) => {
  return string.substring(1,string.length - 1)
}

//last three
const lastThree = (string) => {
  return string.substring(string.length - 3, string.length)
}

//capitilize
const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1,string.length).toLowerCase()
}