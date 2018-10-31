## Multiplication table of primes

### Task: To generate a table of composite prime numbers when N is passed.
The output is a table showing N+1 * N+1 summed prime numbers
*NB: Comments about how and what the code does can be found in the develop branch of this repo.

## Environment set up
Ensure Node is install as this is a simple node app that will output the result of N+1 to the console.

Once the app is installed, fun the following commands to generate the output Node
```
> node
let app = require('./app');
app.generatePrimeNumberTable(n);
app.renderPrimeNumberTable();
```
The last three lines will run the logic and write the results into an output-file.txt which is subsequently read back when the renderPrimeNumberTable() method is run.

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

### Thought process
#### Step 1: Generate a range of numbers from which the number of requested of primes can be harvested from
First task was to calculate a realistic range in which to harvest the requested number of prime numbers from; the notion is that if N number of prime numbers within X range exceeds the number requested, then X range will be used as the starting point to find all prime numbers. Using the Prime Numbers Theorum of approximatation, the codebase uses the x/(log x - 1) formula to return an approximate number of prime numbers within certain exponents and compare that value with the number of primes requested. When the appropriate range is found, the respective exponent is returned as the range to begin iterating for prime numbers; not only is iteration finite but the assurance of finding enough prime numbers within that range is realistic.

#### Step 2: Apply the Sieve of Eratosthenes algorithm
The Sieve of Eratosthenes is an age old algorithm used to filter or 'sieve' out prime numbers from a given range; with a range now defined, all that is required is a function that implements the Sieve of Eratosthenes algorithm to isolate all prime numbers from the range provided.

#### Step 3: Select the requested number of prime numbers from the filtered list
Once the sieve algorithm has run, all that is left is to select the requested number of primes from that list and generate a table-like view displaying the product of multiplied prime numbers.

### What would I improve on
I don't know if any of the existing test frameworks have the capability to performance test code as the current unit tests don't test for code optimisation so at the moment, there's no way to tell whether the written code is performant enough to cope with high traffic; beside jsPerf, further research is needed on my part to figure out how to performance test this code.