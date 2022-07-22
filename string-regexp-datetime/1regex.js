//1)Given the string 'ahb acb aeb aeeb adcb axeb'. 
//Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'.


let str = 'ahb acb aeb aeeb adcb axeb';
let regex = /a[^b]b/g;
let result = str.match(regex);
console.log(result);






