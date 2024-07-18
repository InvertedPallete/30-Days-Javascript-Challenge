// Day : 02

//Task 01 : Write a program to add two numbers and print it to the console

let var1 = 29;
let var2 = 99;
let var3 = var1 + var2;

console.log(`Addition of ${var1} + ${var2} = ${var3}`);

//Task 02 : Write a program to subtract two numbers and print it to the console

let var11 = 100;
let var21 = 89;
let var31 = var11 - var21;

console.log(`subtraction of ${var11} - ${var21} = ${var31}`);

//Task 03 : Write a program to muultiply two numbers and print it to the console

let var12 = 100;
let var22 = 89;
let var32 = var12*var22

console.log(`multiplication of ${var12} * ${var22} = ${var32}`);

//Task 04 : Write a program to divide two numbers and print it to the console

let var13 = 10;
let var23 = 8;
let var33 = var13/var23

console.log(`division of ${var13} / ${var23} = ${var33}`);

//Task 05 : Write a program to find remainder on dividing one number by another
let var14 = 10;
let var24 = 9;
let var34 = var14%var24

console.log(`remaider on ${var14} % ${var24} = ${var34}`);

//Task 6 : Use the += operator to add a number to a variable and log the result to the console
let num = 700;

num += 800;

console.log(num);

//Task 7 : Use the += operator to subtract a number to a variable and log the result to the console
num -= 700;

console.log(num);

//Task 8: Write a program to compare two numbers using > and < and log the result to the console
let a = 100;
let b = 34343;

console.log(a > b);
console.log(a< b);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console
let c = 100;
let d = 100;

console.log(c >= d);
console.log(c <= d);


//Task 10 : Check equality of two numbers and give the result in the console

let t = 8384;
let u = 37493;

console.log(t == u);
console.log(t === u); // '===' checks equality in both type and same values

// Task 11,12,13 : Write a program to uses the logical operator and check 

let cheNum1=110;
let cheNum2=15;

console.log(cheNum1 < cheNum2 && cheNum1 > 20);//false
console.log(cheNum1 < cheNum2 || cheNum1 > 20);//true 
console.log(!(cheNum2 > cheNum1));//true

// Task 14: write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let posNum= -500;
let terCheck= posNum >= 0 ? console.log("The posNum is positive"):console.log("The posNum is negative");
