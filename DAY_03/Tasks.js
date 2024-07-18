// Task 1 : Write a program to check if a number is positive, negative or Zero, and log the result to the console.
let num = 1000;

if(num > 0)
{
    console.log("number is Positive");
}
else if(num == 0){
    console.log("number is Zero");
}
else{
    console.log("number is negative");
}

// Task 2 : Write a person elgible to vote or not, and log the result to the console.
let age = 57;

if(age >= 18)
{
    console.log("Eligible to Vote");
}
else{
    console.log("now elgibile to vote");
}

// Task 3 : Write a program to find the largest of three numbers using nested if-else statements

let a = 1020;
let b = 2000;
let c = 900;

if(a<b){
    if(b>c){
        console.log(b ," is the largest");
    }
    else{
        console.log(c ," is the largest");
    }
}
else{
    if(a > c)
    {
        console.log(a , " is the largest.");
    }
    else{
        console.log(c ," is the largest");
    }
}

// Task 4: Write a program that uses a switch case to detemine the day of the week based on a number (1-7) and log the day name in the console.
let day = 9;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    
    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday"); 
        break;
    case 5:
        console.log("Today is Friday"); 
        break;
    case 6:
        console.log("Today is Saturday"); 
        break;
    case 7:
        console.log("Today is Sunday"); 
        break;
    default:
        console.log("please enter a valid number between 1 - 7");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D' ,'F') base on a score and log the grade to the console 
let grade = 9;

switch (true) {
    case grade < 20:
        console.log("You are fail and you got a F");
        break;
    
    case grade >=20 && grade < 45:
        console.log("You passed with D ");
        break;

    case grade >=45 && grade < 60:
        console.log("Your grade is  C");
        break;
    case grade >= 60 && grade < 85:
        console.log("Your grade is B"); 
        break;
    case grade >= 85 && grade < 100:
        console.log("Your grade is A"); 
        break;
}

//Note for above switch case https://stackoverflow.com/questions/5464362/javascript-using-a-condition-in-switch-case

//<------------------------------------------------------------------------------------------------------------------------------------->//


//Task 6 : Check if a number is odd or even and log the answer to console
let g = 980;

let ans = g%2 == 0 ? console.log("the number is even"): console.log("the number is odd");

//Task 7: Write a program to check if a year is leap year using multiple conditions (dividbe by 5, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2029

if(year % 4 == 0){
    console.log("year is a leap year");
}
else{
    if(year % 400 == 0){
        console.log("year is leap year");
    }
    else{
        console.log("Year is not a lep year");
    }
}

