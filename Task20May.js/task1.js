httpStatusCode = 200;

if (httpStatusCode >= 200 && httpStatusCode <= 299) {
    console.log("Success");
}
else if (httpStatusCode >= 300 && httpStatusCode <= 399) {
    console.log("Redirection");
}
else if (httpStatusCode >= 400 && httpStatusCode <= 499) {
    console.log("Client error");
}
else if (httpStatusCode >= 500 && httpStatusCode <= 599) {
    console.log("Server error");
}
else {
    console.log("Invalid");
}