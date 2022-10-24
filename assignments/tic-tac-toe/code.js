// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
});

drawFilledRect(width / 2, height / 2, length, height, 'black')
drawLine(width / 4, 0, width / 3, height, 'white', 5)
drawLine(width * 2/4, 0, width * 2/4, height, 'white', 5)
drawLine(width * 3/4, 0, width * 3/4, height, 'white', 5)

drawLine(0, height * 1/4, width, height * 1/4, 'white', 5)
drawLine(0, height * 2/4, width, height * 2/4, 'white', 5)
drawLine(0, height * 3/4, width, height * 3/4, 'white', 5)

const ticTacToe = () => {
}