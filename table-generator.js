const { isPrimeNumberADupe } = require("./prime-numbers");
const buildPrimeNumbersTable = (iterator) => {
  if(iterator === 0){ throw( new Error("Invalid argument: 0 is not allowed")); }
  let output = "", primeNumberForX, primeNumberForI;
  for(let i = 0; i <= iterator; i++){
    primeNumberForI = isPrimeNumberADupe(primeNumberForI, i);
    primeNumberForX = 0;
    for(let x=0; x <= iterator; x++){
      if (x === 0 && i === 0){
        output += `| `;
      } else {
        primeNumberForX = isPrimeNumberADupe(primeNumberForX, x);
        // for the rest of the squares
        if (x > 0 || i > 0){
          // if the loop has reached the length of the iterator i.e. the end of a table row, issue the line break
          if(x === iterator){
            output += `|${primeNumberForI * primeNumberForX}|\r\n`;
          } else {
           output += (i != iterator || x != iterator) ? `|${primeNumberForI * primeNumberForX}` :`${primeNumberForI * primeNumberForX}|`;
          }
        }
      }
    }
  }
  return output.trim();
}

module.exports = buildPrimeNumbersTable;
