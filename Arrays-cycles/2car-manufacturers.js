// 2)
// given an array of car manufacturers, convert the array to a string and back to an array. 
//For example, if the array is ["Ford", "Chevy", "Dodge", "Honda"]
//the output should be:
//["Ford", "Chevy", "Dodge", "Honda"]
let carManufacturers = ["Ford", "Chevy", "Dodge", "Honda"]; //create an array of car manufacturers
let carManufacturersString = carManufacturers.toString(); //convert the array to a string
let carManufacturersArray = carManufacturersString.split(","); //convert the string to an array
console.log(carManufacturersArray); //print the array