const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(moves) {
  let position = [0, 0];
  for (const move of moves) {
    if (move === 'north') {
      position[1] = position[1] + 1
    }
    if (move === 'south') {
      position[1] = position[1] - 1
    }
    if (move === 'west') {
      position[0] = position[0] - 1
    }
    if (move === 'east') {
      position[0] = position[0] + 1
    }
    
  }
  return position;
}
console.log(finalPosition(moves));
