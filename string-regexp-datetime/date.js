// Get the day, month and year of the current date and output it to the console separately.


let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log(day);
console.log(month);
console.log(year);
