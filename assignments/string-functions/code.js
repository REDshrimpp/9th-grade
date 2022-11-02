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