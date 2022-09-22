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

let r2 = 2
let b2 = r2
let c2 = b2 * 2
const lineOfCircles = () => {
  while (r < 500) {
    drawFilledCircle(r2, 300, b2, 'red')
    r2 = r2 + c2
    drawFilledCircle(r2, 300, b2, 'blue')
    r2 = r2 + c2
  }
}

lineOfCircles()

let r = 2
let b = r
let c = b * 2
const lineOfAlternatingCircles = () => {
  while (r < 500) {
    drawFilledCircle(r, 300, b, 'red')
    r = r + c
    drawFilledCircle(r, 300, b, 'blue')
    r = r + c
  }
};

