/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 *
 * 
 * */


//lineOfCircles
const lineOfCircles = () => {
  let r = 40
  let b = r
  let c = b * 2
  while (r < 800) {
    drawFilledCircle(r, 300, b, 'red')
    r = r + c
  }
}


//LineOfAlternatingCircles
const lineOfAlternatingCircles = () => {
  let f = 2
  let b = f
  let c = b * 2
  while (r < width) {
    drawFilledCircle(f, 300, b, 'red')
    rf = f + c
    drawFilledCircle(f, 300, b, 'blue')
    f = f + c
  }
};

//dartBoard
const dartBoard = () => {
  let a = 12
  let r = height
  while (r > height / a) {
    drawFilledCircle(width / 2, height / 2, r, 'blue')
    r = r - height / a
    drawFilledCircle(width / 2, height / 2, r, 'red')
    r = r - height / a
  }
}



//checkerBoard
const checkerBoard = () => {
  let r = 5
  let c = 10
  let y = 0
  let red = 'red'
  let blue = 'blue'
  let a = red
  while (y < 500) {
    for (let x = 0; x < width; x = x + width / c) {
      drawFilledRect(x, y, 662 / c, 355 / r, red)
      x = x + width / c
      drawFilledRect(x, y, 662 / c, 355 / r, blue)
    }
    x = 0
    y = y + height / r
    a = red
    red = blue
    blue = a
  }
}

//notReallyCurved

//fillWithCircles
const fillWithCircles = (circleSize) => {
  for (let y = 0; y < height; y + circleSize)
  for (let x = 0; x < width; x + circleSize) {
    drawFilledCircle(x, y,)
  }
}