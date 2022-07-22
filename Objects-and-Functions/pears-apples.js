/*  Pears and apples are accepted to the warehouse, 
write a function that returns the result of adding the number of accepted pears and apples
 to the number of accepted apples
*/ 


function warehouse(pears, apples) {
  return pears + apples;
}
let pears = 5;
let apples = 6;
let result = warehouse(pears, apples);
console.log(result); 