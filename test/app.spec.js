const assert = require("chai").assert;
const expect = require("chai").expect;
const { getPrimeNumber, isPrimeNumberADupe } = require("../prime-numbers");
const buildPrimeNumbersTable = require("../table-generator");

describe("Prime numbers tests", () => {
    describe("getPrimeNumber() method", () => {
        it("Expect getPrimeNumber() method to be defined", () => {
            assert.isFunction(getPrimeNumber);
        });
        it("Expect getPrimeNumber() to throw if number entered is 0", () => {
            expect(() => { getPrimeNumber(0) } ).to.throw();
        });
        it("Expect getPrimeNumber() to return 2 if 2 is entered as a prime number", () => {
            expect(() => { getPrimeNumber(0) }, 2 );
        });
        it("Expect getPrimeNumber() to return 29 as the next prime number if 24 is entered as a prime number", () => {
            expect(() => { getPrimeNumber(24) }, 29 );
        });
    });
    describe("isPrimeNumberADupe() method", () => {
        it("Expect isPrimeNumberADupe() method to be defined", () => {
            assert.isFunction(isPrimeNumberADupe);
        });
    });
    describe("buildPrimeNumbersTable() method", () => {
        it("Expect buildPrimeNumbersTable() method to be defined", () => {
            assert.isFunction(buildPrimeNumbersTable);
        });
        it("Expect buildPrimeNumbersTable() to return a table containing the sum of prime numbers if N = 1 is entered as a the minimum value", () => {
            expect(buildPrimeNumbersTable(1, getPrimeNumber)).to.equal("| |2|\r\n|2|4|");
        });
        it("Expect tableGenerator() to return a table containing the sum of prime numbers if N = 3 is entered as a value", () => {
            expect(buildPrimeNumbersTable(3, getPrimeNumber)).to.equal("| |2|3|5|\r\n|2|4|6|10|\r\n|3|6|9|15|\r\n|5|10|15|25|");
        });
    });
});
