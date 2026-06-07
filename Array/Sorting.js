let fruits = ["banana", "apple", "chickoo"];
fruits.sort();
console.log(fruits);

let nums = [20, 1, 13];
nums.sort();
console.log(nums);

let nums = [20, 1, 15, 21, 45, 1, 8, 13];
nums.sort((a, b) => a - b);
console.log(nums);

let num = [20, 1, 15, 21, 45, 1, 8, 13];
num.sort((a, b) => b - a);
console.log(num);