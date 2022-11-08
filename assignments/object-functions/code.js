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
  return Math.sqrt((Math.abs(pointObject1.x - pointObject2.x)+(Math.abs(pointObject1.y - pointObject2.y))))
}