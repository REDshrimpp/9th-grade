// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

let clickCount = -1
let shape = 'O'
let colour = 'red'
let currentShape = 'X'
registerOnclick((x, y) => {
clickCount++
 if (clickCount % 2 === 0) {
 colour = 'blue'
 currentShape = 'O'
 }
 else {
 colour = 'red'
 currentShape = 'X'
 }
let xs = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
const shape1 = xs[0][0]
const shape2 = xs[0][1]
 
//top left
if (y < height/3 && x < width/3) {
x
drawText(shape1, width*1/6-50 , height*1/6+25, colour, Math.min(width, height) * 0.3);
console.log(xs)
}
//middle left
 else
 if (y < height/3*2 && x < width/3) {
drawText(shape2, width*1/6-50 , height*3/6+25 , colour, Math.min(width, height) * 0.3);
console.log(xs)
 }
//bottom left
   else
 if (y < height && x < width/3)
drawText(shape3, width*1/6-50 , height-10 , colour, Math.min(width, height) * 0.3);
//top middle
   else
if (y < height/3 && x < width/3*2)
drawText(shape4, width*3/6-50 , height*1/6+25 , colour, Math.min(width, height) * 0.3);
 else
   
 if (y < height/3 && x < width/3*2)
drawText(shape5, width*3/6-50 , height*3/6+25 , colour, Math.min(width, height) * 0.3);
 else
  if (y < height/3*2 && x < width/3*2)
drawText(shape6, width*3/6-50 , height*3/6+25 , colour, Math.min(width, height) * 0.3);
 else
  if (y < height && x < width/3*2)
drawText(shape7, width*3/6-50 , height-10 , colour, Math.min(width, height) * 0.3);
else
 if (y < height/3 && x < width)
drawText(shape8, width-150 , height*1/6+25 , colour, Math.min(width, height) * 0.3);
else
 if (y < height/3*2 && x < width)
drawText(shape9, width-150 , height*3/6+25 , colour, Math.min(width, height) * 0.3);
else
 if (y < height && x < width)
drawText(shape, width-150 , height-10 , colour, Math.min(width, height) * 0.3);
});
const drawFrame = () => {
drawLine(width/3, height, width/3, 0, 'black', 10)
drawLine(width/3*2, height, width/3*2, 0, 'black', 10)
drawLine(width, height/3, 0, height/3, 'black', 10)
drawLine(width, height/3*2, 0, height/3*2, 'black', 10)
}
drawFrame()


