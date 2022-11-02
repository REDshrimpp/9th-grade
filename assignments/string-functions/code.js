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
  if (string.length > 1)
    return string[0] + string[length]
}

//swap front and back
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length)() + string.substring(0, string.length / 2)()
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