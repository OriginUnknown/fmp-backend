// 2. Given the requested number (num) as an input, we'll need a numeric figure representing an acceptable range in which
// to source the number of prime numbers requested. This range is calculated using Prime number theorem or, to be more
// specific, x/(log x - 1). The getPrimeNumberRange() will return such a respective range
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

// 3. Now that we know the number of primes needed and have a range to work with, we'll need to do two things:
// a) Find ALL the primes within the given range and b) pick out the requested number of primes from that sorted range
// In order to find all prime numbers within a given range, I was advised to use the sieve of Eratosthenes which, according
// to Wikipedia is 'simple, ancient algorithm for finding all prime numbers up to any given limit. It does so by
// iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2'
const findPrimeNumbersInRange = (numOfPrimes, range) => {
  //   Build array of numbers based on the range passed in
  let sieveOutPrimes, counter = 0, requestedNumOfPrimes = [],
      numsArr = Array.from(Array(range).keys()); //[0,1,2,3...n]
  // Using the square root of the range means that we can stop checking for non primes beyond the square root of the range
  // in question as all possible composites beyond the square root of a range would've been identified
  for (let i = 2; i < Math.sqrt(range); i++) {
    for (let j = i * i; j <= range; j += i) {
      numsArr[j] = false;
    }
  }
  // Next we 'sieve' out the prime numbers by filtering out all false values, leaving only the primes in place
  sieveOutPrimes = numsArr.filter((n) => n !== false && n > 0);
  // Then extrapolate the requested number of primes from our range
  while (counter < numOfPrimes) {
    requestedNumOfPrimes.push(sieveOutPrimes[counter]);
    counter++;
  }
  return requestedNumOfPrimes;
}

// 4. Finally, we populate the table with the requested number of primes numbers, offsetting the starting position for
// the table by one aka (0,0)
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

// 1. Start by requesting the number of prime numbers you need. Once we know the number of primes needed the getPrimeNumberRange()
// method will take the entered value return a numerical range in which we can harvest said amount of prime numbers from
const getPrimeNumbersArray = (num) => {
  let numOfPrimesRequested = num + 1,
      primeNumbersArray,
      primeNumberRange = getPrimeNumberRange(numOfPrimesRequested);
  // Why is 1 returned? 1 isn't counted as a prime number (even though it is technically) but it's included in this case for
  // generating the first line of the table which returns will return multiples of 1 I.E. => 1 * i = i
  primeNumbersArray = findPrimeNumbersInRange(numOfPrimesRequested, primeNumberRange);
  return buildPrimeNumbersTable(numOfPrimesRequested, primeNumbersArray);
}
module.exports = {
  getPrimeNumbersArray,
  buildPrimeNumbersTable,
  findPrimeNumbersInRange,
  getPrimeNumberRange
};