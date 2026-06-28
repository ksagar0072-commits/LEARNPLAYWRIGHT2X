

function a(ClipboardItem, callbackvariable) {
    console.log(`Your order of ${ClipboardItem} is ready`);
    callbackvariable();
}
//First way
// a("Burger", abc);

// function abc() {
//     console.log("Please collect your order");
// }

//Second way
// a("Pizza", function () {
//     console.log("Please collect your order");
// });

//Third way 
a("Pasta", () => {
    console.log("Please collect your order");
});
