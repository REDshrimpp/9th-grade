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

let d = 0
let x = 22
let r =  d - 12
const lineOfCircles = () => {
  while (x < 480) {
    drawFilledCircle(x,300,r,'red')
    x = x + n
    drawFilledCircle(x,300,r,'blue')
  }
}

lineOfCircles()

let n = 10
let c = 240
const dartBoard = () => {
  while (c > n) {
    c = c - n
    drawFilledCircle(250, 300, c, 'blue')
    c = c - n
    drawFilledCircle(250, 300, c, 'red')
  };
}



let t = 0
let a = 0
let m = 'red'
let b = 'blue'
let k = 30
const checkerBoard = () => {
  while (a < 450) {
    drawFilledRect(a, 0, 100, 100, m)
    drawFilledRect(a, 100, 100, 100, b)
    drawFilledRect(a, 200, 100, 100, m)
    drawFilledRect(a, 300, 100, 100, b)
    drawFilledRect(a, 400, 100, 100, m)
    drawFilledRect(a, 500, 100, 100, b)
    a = a + 100
    t = b
    b = m
    m = t
  };
}
