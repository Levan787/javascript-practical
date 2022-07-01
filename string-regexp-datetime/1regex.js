//1)Given the string 'ahb acb aeb aeeb adcb axeb'. 
//Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'.


var str = 'ahb acb aeb aeeb adcb axeb';
var regex = /a[^b]b/g;
var result = str.match(regex);
console.log(result);






