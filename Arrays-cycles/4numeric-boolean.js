//4)
//Convert numeric array to Boolean.
//For example, if the array is [1, 0, 1, 1]
//the output should be:
//[true, false, true, true]
let numbers = [1, 0, 1, 1]; //create an array of numbers
for (let i = 0; i < numbers.length; i++) { //iterate over the array
    numbers[i] = numbers[i] === 1; //convert each element of the array to a boolean
}
console.log(numbers); //print the array