const assert = require("chai").assert;
const expect = require("chai").expect;
const isPrimeNumber = require("../app").isPrimeNumber;
const tableGenerator = require("../app").primeNumberTableGenerator;

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
        it("Expect tableGenerator() to return a table containing the placeholder numbers if 1 is entered as a value", () => {
            expect(tableGenerator(1)).to.equal("|  |0,1|\r\n|1,0|1,1|");
        });
    });
});

