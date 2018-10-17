let isPrimeADupe = (val, cb, numToTest) => (val === cb(numToTest + 1) || cb(numToTest + 1) < val) ?
      cb(val + 1) : cb(numToTest + 1);

const tableGenerator = (iterator, isPrimeNumberCb) => {
  let output = ""
  let primeNumberForX, primeNumberForI;
  // To create N+1 X N+1 table
  for (let i = 0; i <= iterator; i++){
    primeNumberForI = isPrimeADupe(primeNumberForI, isPrimeNumberCb, i);
    primeNumberForX = 0;
    for (let x = 0; x <= iterator; x++){
      // to create the | | square, check if x && i == 0,0
      if (x === 0 && i === 0){
        output += `| `
      } else {
        primeNumberForX = isPrimeADupe(primeNumberForX, isPrimeNumberCb, x);
        // for the rest of the squares
        if (x > 0 || i > 0){
          // if the loop has reached the length of the iterator i.e. the end of a table row, issue the line break
          if(x === iterator){
            output += `|${primeNumberForI * primeNumberForX}|\r\n`;
          } else {
            // output the result of x*i to square (placeholder for now)
           output += (i != iterator || x != iterator) ? `|${primeNumberForI * primeNumberForX}` :`${primeNumberForI * primeNumberForX}|`;
          }
        }
      }
    }
  }
  return output.trim();
}

module.exports = tableGenerator;