//1
const upToX = (string) => {
  return string.substring(0, string.search(/[x]/))
}

//2
const charactersAround = (string, index) => {
  return string[index - 1] + string[index + 1]
}