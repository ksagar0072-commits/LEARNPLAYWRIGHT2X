let percentageOfTestcasesPassed = 95;

if (percentageOfTestcasesPassed === 100) {
    console.log("🟢 Green build");
}
else if (percentageOfTestcasesPassed >= 90 && percentageOfTestcasesPassed <= 99) {
    console.log("🟡 Stable (investigate failures)");
}
else if (percentageOfTestcasesPassed >= 70 && percentageOfTestcasesPassed <= 89) {
    console.log("🟠 Unstable");
}
else {
    console.log("🔴 Broken build, Block deployment")
}