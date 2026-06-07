let str = "Login_Test_Pass_001";

console.log(str.slice(0, 5)); // 0,4 
console.log(str.slice(11));
console.log(str.slice(6));

let str1 = "Login_Test_Pass_001";
let number = str1.slice(-3);
console.log(number);

let newstr = "Login_Test_Pass_001";
console.log(newstr.substring(0, 2));
console.log(newstr.slice(0, 2));

let word = "Hello World";
console.log(word.substring(7, 2));// llo W-->arguments are swapped and treated as 2,7
console.log(word.slice(7, 2)); //empty string
console.log(word.substring(-1));//Hello World-->negative treated as 0
console.log(word.slice(-1));//d-->counts from end