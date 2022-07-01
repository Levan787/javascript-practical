/*  Pears and apples are accepted to the warehouse, 
write a function that returns the result of adding the number of accepted pears and apples
 to the number of accepted apples
*/ 


function warehouse(pears, apples) {
  return pears + apples;
}
let pears = Number(prompt("How many pears do you want to add?"));
let apples = Number(prompt("How many apples do you want to add?"));
let result = warehouse(pears, apples);
alert(result); 