// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('X', x-25, y+25, 'white', Math.min(width, height) * 0.3);
});

drawFilledRect(0, 0, width, height, 'white')
drawLine(width * 1/3, 0, width * 1/3, height, 'black', 5)
drawLine(width * 2/3, 0, width * 2/3, height, 'black', 5)

drawLine(0, height * 1/3, width, height * 1/3, 'black', 5)
drawLine(0, height * 2/3, width, height * 2/3, 'black', 5)

const ticTacToe = () => {
}