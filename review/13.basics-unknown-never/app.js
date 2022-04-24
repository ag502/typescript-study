var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; -> unavailable
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occureed!", 500);
console.log(result);
