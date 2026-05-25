let severity = 7;

switch (severity) {
    case 9:
    case 10:
        console.log("Critical");
        break;
    case 7:
    case 8:
        console.log("High");
        break;
    case 4:
    case 6:
        console.log("Medium");
        break;
    case 1:
    case 2:
    case 3:
        console.log("Low");
        break;
    default:
        console.log("Invalid severity number");
}