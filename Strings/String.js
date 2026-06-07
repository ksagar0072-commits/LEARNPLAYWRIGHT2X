// Single quotes
let a = 'hello';
console.log(a);

// Double quotes
let b = "world";
console.log(b);

let name1 = "Alice";
let msg = `Hello ${name1}, 2+2=${2 + 2}`;
console.log(msg);

let longname = `
Hi, My name is ABC.
This is 2nd line.
THis is 3rd line.`;
console.log(longname);

console.log(String(200)); // "200"
console.log(String(true));  // "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // "[1,2]"
