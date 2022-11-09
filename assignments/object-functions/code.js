//getX
const getX = (object) => {
  return object.x
}

//point
const point = (x, y) => {
  return { x, y }
}

//emptyObject
const emptyObject = () => {
  return {}
}

//distance
const distance = (p1, p2) => {
  return Math.sqrt(Math.abs(p1.x - p2.x) **2 + Math.abs(p1.y - p2.y) **2)
}

//mid point
const midpoint = (p1, p2) => {
  let result = {x : 0, y : 0}
  result.x = (p1.x + p2.x) / 2
  result.y = (p1.y + p2.y) / 2
  return result
}