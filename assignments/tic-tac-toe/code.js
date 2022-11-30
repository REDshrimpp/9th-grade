// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.



registerOnclick((x, y) => {
  let clickCount = 0
  let currentShape = 'X'
  let color = 'red'
  if (clickCount % 2 !== 0) {
    currentShape = 'Y'
    color = 'blue'
  }
  else {
    currentShape = 'X'
    color = 'red'
  }
  let xs = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

    //top left
    if ((y > height / 3 * 2) && (x > width / 3 * 2) && (xs[0][0] === 0)) {
      xs[0][0] = currentShape
      drawText(currentShape, width * 1 / 6 - 50, height * 5 / 6 + 25, color, Math.min(width, height) * 0.3);
      console.log(xs)
    }
    //middle left
    else
      if ((y < height / 3 * 2 && y > height / 3 && x < width / 3) && xs[1][0] === 0) {
        xs[1][0] = currentShape
        drawText(currentShape, width * 1 / 6 - 50, height * 3 / 6 + 25, color, Math.min(width, height) * 0.3);
        clickCount++
      }
      //bottom left
      else
        if (y < height && x < width / 3 && xs[2][0] === 0) {
          drawText(currentShape, width * 1 / 6 - 50, height - 10, color, Math.min(width, height) * 0.3);
        }
        //top middle
        else
          if (y < height / 3 && x < width / 3 * 2 && xs[0][1] === 0) {
            drawText(currentShape, width * 3 / 6 - 50, height * 1 / 6 + 25, color, Math.min(width, height) * 0.3);
          }
          else
            if (y < height / 3 && x < width / 3 * 2 && xs[1][1] === 0) {
              drawText(currentShape, width * 3 / 6 - 50, height * 3 / 6 + 25, color, Math.min(width, height) * 0.3);
            }
            else
              if (y < height / 3 * 2 && x < width / 3 * 2 && xs[2][1] === 0) {
                drawText(currentShape, width * 3 / 6 - 50, height * 3 / 6 + 25, color, Math.min(width, height) * 0.3);
              }
              else
                if (y < height && x < width / 3 * 2 && xs[0][2] === 0) {
                  drawText(currentShape, width * 3 / 6 - 50, height - 10, color, Math.min(width, height) * 0.3);
                }
                else
                  if (y < height / 3 && x < width && xs[1][2] === 0) {
                    drawText(currentShape, width - 150, height * 1 / 6 + 25, color, Math.min(width, height) * 0.3);
                  }
                  else
                    if (y < height / 3 * 2 && x < width && xs[2][2] === 0) {
                      drawText(currentShape, width - 150, height * 3 / 6 + 25, color, Math.min(width, height) * 0.3);
                    }
    ;
});

const drawFrame = () => {
  drawLine(width / 3, height, width / 3, 0, 'black', 10)
  drawLine(width / 3 * 2, height, width / 3 * 2, 0, 'black', 10)
  drawLine(width, height / 3, 0, height / 3, 'black', 10)
  drawLine(width, height / 3 * 2, 0, height / 3 * 2, 'black', 10)
}

drawFrame()