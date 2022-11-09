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
  return Math.sqrt(Math.abs(p1.x - p2.x) ** 2 + Math.abs(p2.y - p2.y ** 2))
}