
//Perform addition of various types (string + boolean, string + number, number + boolean)


var a = "5";
var b = true;
var c = 5;



if (typeof a === "string" && typeof b === "boolean") {
    console.log(a + b);
}

if (typeof a === "string" && typeof c === "number") {
    console.log(a + c);
}

if (typeof c === "number" && typeof b === "boolean") {
    console.log(c + b);
}


//Perform multiplication of various types (string * boolean, string * number, number * boolean)

if (typeof a === "string" && typeof b === "boolean") {
    console.log(a * b);
}

if (typeof a === "string" && typeof c === "number") {
    console.log(a * c);
}

if (typeof c === "number" && typeof b === "boolean") {
    console.log(c * b);
}

//Divide different types (string / boolean, string / number, number / Boolean)
if (typeof a === "string" && typeof b === "boolean") {
    console.log(a / b);
}

if (typeof a === "string" && typeof c === "number") {
    console.log(a / c);
}

if (typeof c === "number" && typeof b === "boolean") {
    console.log(c / b);
}



/*
let a  = "hello";
let b = true;
let c = 10;

//addition
console.log(a  + b);
console.log(a + c);
console.log(c + b);


//multiplication
console.log(a * b)
console.log(a * c)
console.log(c * b)

//division
console.log(a / b)
console.log(a / c)
console.log(c / b)


*/