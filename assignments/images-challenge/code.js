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

const lineOfCircles = () => {
  let r = 40
  let b = r
  let c = b * 2
  while (r < 800) {
    drawFilledCircle(r, 300, b, 'red')
    r = r + c
  }
}



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




const checkerBoard = () => {
  let r = 5
  let c = 5
  let y = 0
  while (y < 500) {
    for (let x = 0; x < length; x = x + length / c) {
      drawFilledRect(x, y, height / r, length / c, 'red')
    }
    y = y + height / r
  }
}

drawFilledRect(length / 2, height / 2, length / 2, height / 2, 'red')