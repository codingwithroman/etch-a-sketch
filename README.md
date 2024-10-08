Understand:
Make a big square consisting of 256 little squares. Whenever your cursor moves over one of the squares, the square will turn into a different color. When you press the button on the top of the page you can input a number up until 100. Doing this will form a new big blank square and the number that was entered will represent the amount of squares (height and width) the big square will consist of.

Plan:
- UI: A grid of a variable amount of squares. A button above the grid that will reset the game and prompt to set up the new one.
- Input: clicking reset button, a number 1-100 (prompt), cursor over element.
- Output: change color of div based on cursor position, grid of interacitve divs

Pseudocode:
HTML structure with a main container div
add 256 square divs to the container using JS (think flexible code):
    - target main container
    - element creation
    - append in DOM
a combination of flexbox logic in CSS to make the divs appear as a grid of 16 x 16 squares
mouse over event to change color of div (for nodelist)
button activates function that will send a prompt and use prompt input (number) to generate an (input) by (input) grid of squares
