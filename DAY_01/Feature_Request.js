// Declaring variables of different data types
let numberVar = 42;
let stringVar = "Hello, world!";
let booleanVar = true;
let undefinedVar;
let nullVar = null;
let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function() { return "I am a function"; };
let symbolVar = Symbol("unique");

// Logging the value and type of each variable to the console
console.log("numberVar:", numberVar, "Type:", typeof numberVar);
console.log("stringVar:", stringVar, "Type:", typeof stringVar);
console.log("booleanVar:", booleanVar, "Type:", typeof booleanVar);
console.log("undefinedVar:", undefinedVar, "Type:", typeof undefinedVar);
console.log("nullVar:", nullVar, "Type:", typeof nullVar); // Note: typeof null returns 'object'
console.log("objectVar:", objectVar, "Type:", typeof objectVar);
console.log("arrayVar:", arrayVar, "Type:", typeof arrayVar); // Note: typeof array returns 'object'
console.log("functionVar:", functionVar, "Type:", typeof functionVar);
console.log("symbolVar:", symbolVar, "Type:", typeof symbolVar);
