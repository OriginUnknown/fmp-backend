const isPrimeNumber = require("./prime-numbers");
const tableGenerator = require("./table-generator");
const fs = require("fs");

const generatePrimeNumberTable = (num) => {
    const output = tableGenerator(num, isPrimeNumber);
    fs.writeFile('./output-file.txt', output, 'utf-8', (err) => {
        if(err) {
            throw err;
        }
        console.log('file saved');
    });
}

const renderPrimeNumberTable = () => {
    fs.readFile('./output-file.txt', 'utf-8', (err, data)=> {
        if(err) {
            throw err;
        }
        console.log(data);
    });
}

module.exports = {
    isPrimeNumber,
    tableGenerator,
    generatePrimeNumberTable,
    renderPrimeNumberTable
}