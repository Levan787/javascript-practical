//Given the string '2 + 3 223 2223'. 
//Write a regex that finds line 2 + 3 without capturing the rest.


var str = '2 + 3 223 2223';
var regex = /2\s\+\s3/g;
var result = str.match(regex);
console.log(result);
