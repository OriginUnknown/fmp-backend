const assert = require('chai').assert;
const isPrimeNumber = require('../app').isPrimeNumber;
const tableGenerator = require('../app').primeNumberTableGenerator;

describe('Prime numbers', () => {
    it('Expect isPrimeNumber() method to be defined', () => {
        assert.isFunction(isPrimeNumber);
    });
    it('Expect tableGenerator() method to be defined', () => {
        assert.isFunction(tableGenerator);
    });
});

