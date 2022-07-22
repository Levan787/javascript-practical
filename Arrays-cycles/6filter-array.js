//6)
//Filter array [1,6,7,8,3,4,5,6] by value> 3.
//the output should be:
//[6,7,8,6]
let numbers = [1, 6, 7, 8, 3, 4, 5, 6]; //create an array of numbers
let filteredNumbers = numbers.filter(function(number) { //filter the array by value > 3
    return number > 3; //filter the array by value > 3
}
);
console.log(filteredNumbers); //print the array
