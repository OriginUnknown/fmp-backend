const tableGenerator = (iterator, isPrimeNumberCb) => {
  let output = "";
  // To create N+1 X N+1 table
  for (let i = 0; i <= iterator; i++){
    for (let x = 0; x <= iterator; x++){
      // to create the | | square, check if x && i == 0,0
      if (x === 0 && i === 0){
        output += `| `
      } else {
        // for the rest of the squares
        if (x > 0 || i > 0){
          // if the loop has reached the length of the iterator i.e. the end of a table row, issue the line break
          if(x === iterator){
            output += `|${isPrimeNumberCb(i+1) * isPrimeNumberCb(x+1)}|\r\n`;
          } else {
            // output the result of x*i to square (placeholder for now)
           output += (i != iterator || x != iterator) ? `|${isPrimeNumberCb(i+1) * isPrimeNumberCb(x+1)}` :`${isPrimeNumberCb(i+1) * isPrimeNumberCb(x+1)}|`;
          }
        }
      }
    }
  }
  return output.trim();
}

module.exports = tableGenerator;