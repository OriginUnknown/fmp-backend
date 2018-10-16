const isPrimeNumber = (num) => {
  if(num > 1) {
    let isPrimeNum = []; // stores the bool value for the check against the num parameter passed in
    // numToTest will decipher if a number is prime or not.
    let numToTest = [2,3,4,5,6,7,8,9].filter((n) => n !== num);
      for(let y = 0; y < numToTest.length; y++){
        isPrimeNum.push(num % numToTest[y] === 0);
      }
      // if all boolean values from the numToTest are false then num is a boolean and should be returned
    if(isPrimeNum.every( (bool) => bool === false) ){
      return num;
    } else {
      // else increment the num passed in by one until the next prime number is reached
      return isPrime2( ++num );
    }
  } else {
    return "value too low";
  }
}

const primeNumberTableGenerator = (iterator) => {
  let output = "";
  // To create N+1 X N+1 table
  for (let i=0; i<=iterator; i++){
    for (let x=0; x<=iterator; x++){
      // to create the | | square, check if x && i == 0,0
      if (x===0 && i===0){
        output += `|  `
      } else {
        // for the rest of the squares
        if (x > 0 || i > 0){
          // if the loop has reached the length of the iterator i.e. the end of a table row, issue the line break
          if(x === iterator){
            output += `|${i},${x}|\r\n`;
          } else {
            // output the result of x*i to square (placeholder for now)
           output += (i!=iterator || x!=iterator) ? `|${i},${x}` :`${i},${x}|`;
          }
        }
      }
    }
  }
  return output;
}

module.exports = {
    isPrimeNumber: isPrimeNumber,
    primeNumberTableGenerator: primeNumberTableGenerator
}