const getPrimeNumberRange = (num) => {
  const oneThousand = Math.pow(10, 3); // approx: 166.66 possible prime numbers
  const tenThousand = Math.pow(10, 4); // approx: 1111 possible prime numbers
  const oneHundredThousand = Math.pow(10, 5); // approx: 9090 prime numbers
  const oneMillion = Math.pow(10, 6); // approx: 76923 prime numbers in range

  if (num < (oneThousand / Math.floor(Math.log(oneThousand - 1)))) {
    return oneThousand;
  }
  if (num < (tenThousand / Math.floor(Math.log(tenThousand - 1)))) {
    return tenThousand;
  }
  if (num < (oneHundredThousand / Math.floor(Math.log(oneHundredThousand - 1)))) {
    return oneHundredThousand;
  }
  if (num < (oneMillion / Math.floor(Math.log(oneMillion - 1)))) {
    return oneMillion;
  }
};

const findPrimeNumbersInRange = (numOfPrimes, range) => {
  let sieveOutPrimes, counter = 0, requestedNumOfPrimes = [],
      numsArr = Array.from(Array(range).keys()); //[0,1,2,3...n]
  for (let i = 2; i < Math.sqrt(range); i++) {
    for (let j = i * i; j <= range; j += i) {
      numsArr[j] = false;
    }
  }

  sieveOutPrimes = numsArr.filter((n) => n !== false && n > 0);
  while (counter < numOfPrimes) {
    requestedNumOfPrimes.push(sieveOutPrimes[counter]);
    counter++;
  }
  return requestedNumOfPrimes;
}

const buildPrimeNumbersTable = (iterator, arr) => {
  let output = '';
  for (let x = 0; x < arr.length; x++) {
    for (let i = 0; i < arr.length; i++) {
      if (x === 0 && i === 0) {
        output += `|   | `;
      } else {
        if ((i + 1) === iterator) {
          if ((x + 1) === iterator) {
            output += `${arr[x] * arr[i]} |\r\n`;
          } else {
            output += `${arr[x] * arr[i]} |\r\n| `;
          }
        } else {
          output += `${arr[x] * arr[i]} | `;
        }
      }
    }
  }
  return output.trim();
};

const getPrimeNumbersArray = (num) => {
  let numOfPrimesRequested = num + 1,
      primeNumbersArray,
      primeNumberRange = getPrimeNumberRange(numOfPrimesRequested);
  primeNumbersArray = findPrimeNumbersInRange(numOfPrimesRequested, primeNumberRange);
  return buildPrimeNumbersTable(numOfPrimesRequested, primeNumbersArray);
}
module.exports = {
  getPrimeNumbersArray,
  buildPrimeNumbersTable,
  findPrimeNumbersInRange,
  getPrimeNumberRange
};