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
  let object = {'x' : 0, 'y' : 0}
  return Math.sqrt(Math.abs(pointObject1.x - pointObject2.x)+(Math.abs(pointObject1.y - pointObject.y)))
}