// FizzBuzz Challenge
// use a for loop to go through the numbers from 1 to 15. for each number, if it is divisible by 3, print "Fizz", if it is divisible by 5, print "Buzz", and if it is divisible by both, print "FizzBuzz". Otherwise, print the number itself.

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}