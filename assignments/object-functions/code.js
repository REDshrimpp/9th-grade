//getX
const getX = (object) => {
  return object.x
}

//point
const point = (x, y) => {
  return {x, y}
}

//emptyObject
const emptyObject = () => {
  return {}
}

//distance
const distance = (pointObject1, pointObject2) => {
  return Math.sqrt(Math.abs(pointObject1.x)**2  - (pointObject2.x **2)+(Math.abs(pointObject1.y **2 - pointObject2.y)))
}