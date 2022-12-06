//1 NOTE
const upToX = (string) => {
  return string.substring(0, string.indexOf(/[x]/))
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
  return string.indexOf(/[x]/)
}