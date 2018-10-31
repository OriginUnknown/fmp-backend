const { getPrimeNumbersArray } = require("./prime-numbers");
const fs = require("fs");

const generatePrimeNumberTable = (num) => {
    const output = getPrimeNumbersArray(num);
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
    generatePrimeNumberTable,
    renderPrimeNumberTable
};
