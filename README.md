## Multiplication table of primes

### Task: To generate a table of summed prime numbers when N is passed. 
The output is a table showing N+1 * N+1 summed prime numbers

## Environment set up
Ensure Node is install as this is a simple node app that will output the result of N+1 to the console.

Once the app is installed, fun the following commands to generate the output Node
```
let app = require('./app');
app.generatePrimeNumberTable(n)
app.renderPrimeNumberTable();
```

For example, if N is 8, the output would print the following to the console:
```
| |2|3|5|7|11|13|17|19|
|2|4|6|10|14|22|26|34|38|
|3|6|9|15|21|33|39|51|57|
|5|10|15|25|35|55|65|85|95|
|7|14|21|35|49|77|91|119|133|
|11|22|33|55|77|121|143|187|209|
|13|26|39|65|91|143|169|221|247|
|17|34|51|85|119|187|221|289|323|
|19|38|57|95|133|209|247|323|361|
```

### The good, the bad and the rest
The good:
- the appworks which I'm happy with.
- some degree of a separation of concerns

The downsides are:
- the unit tests are not sufficient as they don't test all functions
- no performance tests to validate the efficiency of the functions
- I don't think the code is optimised at least to the point that it follows the 'Sieve of Eratosthenes'.

Nevertheless the fact that the ground work has been laid for this small app as inspired me to take the next steps:
- Learn a 'little' about Big O notation, algorithm complexity and how to calculate the most optimal way to implement said soluton. 
- Refactor the code further and strip away the isPrimeNumberADupe method as I feell this adds to performance issues
- More code coverage for robustness.