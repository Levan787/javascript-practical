//In a try catch construction, wrap the code: console.log (a), let a = 3. 
//And display an error - ‘let must be declared’ before use. 
//When running 1/0, the error 'cannot be divided by zero' is displayed.


try {
   
    console.log(a);
    let a = 3;


}
catch (e) {
    console.log('let must be declared');
    console.log(e)

}










