let url = "https://staging.vwo.com/api/login?retry=true";

// includes
console.log(url.includes("staging"));
console.log(url.includes("login"))

let a = url.startsWith("https");
console.log(a);

console.log(url.endsWith("true"));

let name = "abcdabcdabcda";
console.log(name.indexOf("a"));
console.log(name.lastIndexOf("a"));
console.log(name.indexOf("x"));// -1 --> when the character doesn't exist
console.log(name.lastIndexOf("y"));


let url1 = "https://staging.vwo.com/api/login?retry=true";
console.log(url1.search(/login/)); //28 --checks the regex for this word and returns the first index
console.log(url1.search(/vwo/));
console.log(url1.search(/log/));