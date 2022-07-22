 /* -  Your name is saved in the payment terminal,
  write a function to define the name in the terminal 
  if you entered your name, then hello + name, if not, then there is no such name
  */
  function payment(name) {
    if (name === 'George') {
        return 'There is no such name';
    } else {
        return 'Hello ' + name;
    }
}
let name2 = "Levan";
let result = payment(name2);
console.log(result);

