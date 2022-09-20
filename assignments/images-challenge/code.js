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

let x = 0
let y = 300
const lineOfCircles = () => {
  while (x < 480) {
    x = x + 20
    drawFilledCircle(x, 300, 10, 'red')
    x = x + 20
    drawFilledCircle(x, 300, 10, 'blue')
  }
}

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
let r = 'red'
let b = 'blue'
const checkerBoard = () => {
  while (b < 240)
  drawFilledCircle(0,0,0,0)
}
  drawFilledRect(a,0,100,100,r)
  drawFilledRect(a,100,100,100,b)
  drawFilledRect(a,200,100,100,r)
  drawFilledRect(a,300,100,100,b)
  drawFilledRect(a,400,100,100,r)
  drawFilledRect(a,500,100,100,b)
a = a + 100
t = b
b = r
r = t


