const assert = require("chai").assert;
const expect = require("chai").expect;
const { isPrimeNumber, tableGenerator } = require("../app");

describe("Prime numbers tests", () => {
    describe("isPrimeNumber() method", () => {
        it('Expect isPrimeNumber() method to be defined', () => {
            assert.isFunction(isPrimeNumber);
        });
        it("Expect isPrimeNumber() to throw if number entered is 0", () => {
            expect(() => { isPrimeNumber(0) } ).to.throw();
        });
        it("Expect isPrimeNumber() to return 2 if 2 is entered as a prime number", () => {
            expect(() => { isPrimeNumber(0) }, 2 );
        });
        it("Expect isPrimeNumber() to return 29 as the next prime number if 24 is entered as a prime number", () => {
            expect(() => { isPrimeNumber(24) }, 29 );
        });
    });
    describe("tableGenerator() method", () => {
        it("Expect tableGenerator() method to be defined", () => {
            assert.isFunction(tableGenerator);
        });
        it("Expect tableGenerator() to return a table containing the sum of prime numbers if N = 1 is entered as a the minimum value", () => {
            expect(tableGenerator(1, isPrimeNumber)).to.equal("| |2|\r\n|2|4|");
        });
        it("Expect tableGenerator() to return a table containing the sum of prime numbers if N = 3 is entered as a value", () => {
            expect(tableGenerator(3, isPrimeNumber)).to.equal("| |2|3|5|\r\n|2|4|6|10|\r\n|3|6|9|15|\r\n|5|10|15|25|");
        });
    });
});

