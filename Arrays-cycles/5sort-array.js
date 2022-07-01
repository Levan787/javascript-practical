//5)
//Sort the array [1,6,7,8,3,4,5,6] in descending order.
//the output should be:
//[8,7,6,6,5,4,3,1]
var numbers = [1, 6, 7, 8, 3, 4, 5, 6]; //create an array of numbers
numbers.sort(function(a, b) { //sort the array in descending order
    return b - a; //sort the array in descending order
}
);
console.log(numbers); //print the array