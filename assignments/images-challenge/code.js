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


let c = 240
const dartBoard = () => {
while (c > 20) {
  c = c - 20
drawFilledCircle(250,300,c,'blue')
c = c -20
drawFilledCircle(250,300,c,'red')
};
}


let b = 10
const checkerBoard = () => {
  while (b < 240)
  drawSquare(10,40,40,'red')
}

drawSquare(10,10,30,50,'red')