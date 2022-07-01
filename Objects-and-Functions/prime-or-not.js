
//  Write a function that determines whether a number is prime or not
function isPrime(number) {
    if (number < 2) {
        return 'This is not prime number';
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'This is not prime number';
        }
    }
    return 'This is prime number';
}
let  prime_number = prompt("Enter a prime number");
let result = isPrime(prime_number);
alert(result);