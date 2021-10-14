const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(moves) {
let x = 0;
let y = 0;
for( const move of moves) {
  if(move ==='north'){
    y++;
  }
  if(move ==='south'){
    y--;
  }
  if(move ==='east'){
    x++;
  }
  if(move ==='west'){
    x--;
  }

}
const grid= [x,y];

return grid;                                                                                                                                                                                                   
}

console.log(finalPosition(moves));
