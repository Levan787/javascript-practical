// 2)
// given an array of car manufacturers, convert the array to a string and back to an array. 
//For example, if the array is ["Ford", "Chevy", "Dodge", "Honda"]
//the output should be:
//["Ford", "Chevy", "Dodge", "Honda"]
var carManufacturers = ["Ford", "Chevy", "Dodge", "Honda"]; //create an array of car manufacturers
var carManufacturersString = carManufacturers.toString(); //convert the array to a string
var carManufacturersArray = carManufacturersString.split(","); //convert the string to an array
console.log(carManufacturersArray); //print the array