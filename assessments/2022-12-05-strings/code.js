//1
const upToX = (string) => {
  return string.substring(0, string.search(/[x]/))
}

//2
const charactersAround = (string, index) => {
  return string[index - 1] + string[index + 1]
}

//3
const middle = (string) => {
  return string.substring(string.length / 4, string.length / 4 * 3)
}