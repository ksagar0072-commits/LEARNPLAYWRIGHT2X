// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 3));

const sum = (a, b) => a + b;
console.log(sum(2, 8));


//if we use {} then we must explicitly return 
const subtract = (a, b) => {
    return a - b;
}
console.log(subtract(2, 8));

const grade = score => {
    if (score >= 90) {
        return "A";
    } else if (score >= 75) {
        return "B";
    } else {
        return "C"
    }
}
console.log(grade(87));