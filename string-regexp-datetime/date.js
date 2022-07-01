// Get the day, month and year of the current date and output it to the console separately.


var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
console.log(day);
console.log(month);
console.log(year);
