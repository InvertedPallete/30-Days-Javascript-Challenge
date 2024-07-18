// Using let
let variableLet = "Initial value with let";
console.log("variableLet before reassignment:", variableLet);

variableLet = "New value with let";
console.log("variableLet after reassignment:", variableLet);

// Using const
const variableConst = "Initial value with const";
console.log("variableConst before reassignment:", variableConst);

try {
    variableConst = "New value with const"; // This will throw an error
} catch (error) {
    console.log("Error when trying to reassign variableConst:", error.message);
}
