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
  object.x = Math.sqrt(Math.abs(pointObject1['x'], pointObject2['x']) **2)
  object.y = Math.sqrt(Math.abs(pointObject1['y'], pointObject2['y']) **2)
  return Math.abs(object.x, object.y)

}