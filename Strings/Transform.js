let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());//trim from both sides
console.log(str.trimStart())//trim from left side
console.log(str.trimEnd())//trim from right side

let msg = "Test: FAIL. Retry: FAIL.";
// console.log(msg.replace("FAIL", "PASS"));
// console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));


let message = "pass1, pass2, pass3, pass4"
let newmessage = message.replace(/pass/g, "fail");//fail1, fail2, fail3, fail4
console.log(newmessage.replace("fail1", "pass1"));

// Concatenation
console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "World"));
console.log(`${"Hello"} ${"World"}`);


let env = "tst";
let url = `https://${env}.vwo.com/api/login`;
console.log(url);

let r = "pass,fail,skip".split(",");//["pass", "fail", "skip"]
// split() method breaks the string into an array, using the comma as the separator.
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
//Joins the array back into a single string, using a space " " as the separator.
console.log(rr);

let date = ["2024", "06", "20"];
let formattedDate = date.join("-");//2024-06-20
console.log(formattedDate);