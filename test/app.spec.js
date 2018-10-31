const assert = require("chai").assert;
const expect = require("chai").expect;
const sinon = require("sinon");
const { getPrimeNumbersArray, buildPrimeNumbersTable,
    findPrimeNumbersInRange, getPrimeNumberRange
} = require("../prime-numbers");

describe("Prime numbers tests", () => {
    describe("getPrimeNumberRange() method", () => {
        it("Expect getPrimeNumberRange() method to be defined", () => {
            assert.isFunction(getPrimeNumberRange);
        });
        it("Expect getPrimeNumberRange() to return 1000 as a range if requested number of primes is below 166.66", () => {
            expect(getPrimeNumberRange(125)).to.equal(1000);
        });
        it("Expect getPrimeNumberRange() to return 10000 as a range if requested number of primes is above 166.66 and below 1111.111", () => {
            expect(getPrimeNumberRange(830)).to.equal(10000);
        });
        it("Expect getPrimeNumberRange() to return 100000 as a range if requested number of primes is above 1111.111 and below 9090", () => {
            expect(getPrimeNumberRange(5600)).to.equal(100000);
        });
        it("Expect getPrimeNumberRange() to return 1000000 as a range if requested number of primes is above 9090 and below 76,923", () => {
            expect(getPrimeNumberRange(5600)).to.equal(100000);
        });
    });
    describe("findPrimeNumbersInRange() method", () => {
        it("Expect findPrimeNumbersInRange() method to be defined", () => {
            assert.isFunction(findPrimeNumbersInRange);
        });
        it("Expect findPrimeNumbersInRange() method to return 10 requested prime numbers from a range of 1000", () => {
            expect(findPrimeNumbersInRange(10, 1000)).to.eql([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23 ]);
        });
        it("Expect findPrimeNumbersInRange() method to return 200 requested prime numbers from a range of 10000", () => {
            expect(findPrimeNumbersInRange(200, 10000)).to.eql([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217]);
        });
    });
    describe("buildPrimeNumbersTable() method", () => {
        it("Expect buildPrimeNumbersTable() method to be defined", () => {
            assert.isFunction(buildPrimeNumbersTable);
        });
        it("Expect buildPrimeNumbersTable() to return a table containing the sum of prime numbers if N = 1 is entered as a the minimum value", () => {
            expect(buildPrimeNumbersTable(2, [1, 2])).to.equal("|   | 2 |\r\n| 2 | 4 |");
        });
    });
    describe("getPrimeNumbersArray() method", () => {
        it("Expect getPrimeNumbersArray() method to be defined", () => {
            assert.isFunction(getPrimeNumbersArray);
        });
        it("Expect getPrimeNumbersArray() to return a table containing the sum of prime numbers if N = 4 is entered as a value", () => {
            expect(buildPrimeNumbersTable(5, [1, 2, 3, 5, 7])).to.equal("|   | 2 | 3 | 5 | 7 |\r\n| 2 | 4 | 6 | 10 | 14 |\r\n| 3 | 6 | 9 | 15 | 21 |\r\n| 5 | 10 | 15 | 25 | 35 |\r\n| 7 | 14 | 21 | 35 | 49 |");
        });
    });
});
