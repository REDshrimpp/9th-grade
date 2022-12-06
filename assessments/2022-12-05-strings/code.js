//1 NOTE
const upToX = (string) => {
  return string.substring(0, string.indexOf('x'))
}

//2
const charactersAround = (string, index) => {
  return string[index - 1] + string[index + 1]
}

//3
const middle = (string) => {
  return string.substring(string.length / 4, string.length / 4 * 3)
}

//4
const pair = (string1, string2) => {
  return string1 + ' and ' + string2
}

//5
const containsX = (string) => {
  return string.indexOf('x') !== -1
}

//6
const slug = (string1, string2, string3) => {
  return string1.toLowerCase() + '-' + string2.toLowerCase() + '-' + string3.toLowerCase() + '-'
}

//7
const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1, string.length)
}

//8
const capitalizeName = (fullName) => {
  return capitalize(fullName.substring(0, fullName.indexOf(' ') + fullName.substring(fullName.indexOf(' '))))
}