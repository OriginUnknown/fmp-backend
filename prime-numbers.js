let isPrimeNumberADupe = (val, callback, numToTest) => (val === callback(numToTest + 1) || callback(numToTest + 1) < val) ?
      callback(val + 1) : callback(numToTest + 1);

const getPrimeNumber = (num) => {
  if(num > 0) {
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
      return getPrimeNumber( ++num );
    }
  } else {
    throw new Error("Enter a value greater zero"); 
  }
}
module.exports = {
  getPrimeNumber,
  isPrimeNumberADupe
};
