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
  while (r < 500) {
    drawFilledCircle(f, 300, b, 'red')
    rf = f + c
    drawFilledCircle(f, 300, b, 'blue')
    f = f + c
  }
};

const dartBoard = () => {
let a = 60
let d = 250
let e = a
  while (d > 20) {
    drawFilledCircle(250, 250, d * e / a, 'blue')
    e = e - 1
    drawFilledCircle(250,250, d * e / a, 'red')
    e = e - 1
  }
}

dartBoard()