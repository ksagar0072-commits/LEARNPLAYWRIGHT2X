let a = 10;
let b = 20;
let c = 30;

if (a === b && b === c) {
    console.log("Triangle is equilateral")
} else if (a === b || b === c || a === c) {
    console.log("Triangle is Isosceles")
} else {
    console.log("Triangle is Scalene")
}