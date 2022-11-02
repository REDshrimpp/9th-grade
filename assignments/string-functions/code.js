//findFnord
const findFnord = (string) => {
  return string.search(/[Fnord]/)
}

//string contains
const stringContains = (string1, string2) => {
  if (string1.search([string2]) !== -1) {
    return true
  }
  else
  return false
}