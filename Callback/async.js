

function a(item, callbackitem) {
    console.log(`Test case 1 has ${item}`);
    setTimeout(callbackitem, 2000);
}

a("passed", () => {
    console.log(`Test case 2 has passed`);
});

console.log(`Test case 3 has passed`);