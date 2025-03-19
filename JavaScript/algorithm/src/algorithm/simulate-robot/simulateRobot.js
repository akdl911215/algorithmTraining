function simulateRobot(grid, start, commands) {
  let row = start[0];
  let col = start[1];
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = {
    'U': [-1, 0], // Up
    'D': [1, 0], // Down
    'L': [0, -1], // Left
    'R': [0, 1], // Right
  };

  for (const command of commands) {
    if (directions[command]) {
      const [dr, dc] = directions[command];
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the new position is valid
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        row = newRow;
        col = newCol;
      } else {
        //Robot hit a wall, or went out of bounds.
        console.log("Robot hit a wall");
        return [row,col];
      }
    }
  }

  return [row, col]; // Final position
}

// Example usage:
const grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const startPosition = [1, 1];
const moveCommands = ['R', 'D', 'L', 'U', 'R'];

const finalPosition = simulateRobot(grid, startPosition, moveCommands);
console.log('Final position:', finalPosition);