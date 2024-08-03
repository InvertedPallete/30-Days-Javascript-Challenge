//Task 01 : Write a program to print numbers from 1 to 100 using a for loop
let str =""
for (let i = 1; i <= 100; i++) {
    str += i + " ";
}
console.log(str);

//NOTE -> https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line


//Task 2 : Write a program to print the multiplication table of 5 using a for loop
let a =  5;

for(let i = 1; i<= 10 ;i++)
{
    console.log(a*i);
}

//Task 03 : Write a while loop to calculate the sum of numbers from 1 to 100
let num = 0;
let sum = 0;
while(num < 10){
    num++;
    sum += num;
    
}
console.log(sum);
let say = num*(num+1);
console.log("check with the maths : ", (say)/2 );

//Task 04 : Write a program to print numbers from 10 to 1 using while loop
let reverse = 10;
while(reverse > 0){
    console.log(reverse);
    reverse--;
}
console.log("");
//Task 05 : Write a program to print number from 1 ro 5 using a do while loop
let t = 1;

do {
    console.log(t);
    t++;
} while (t<=5);

// Task 06 : Write a program to calculate the factorial of number using a do while loop
let fact = 5;
let curr = 1;
do{
    curr *= fact;
    fact--;
}while(fact > 0)
console.log(curr);

//Task 07 : Write a program to print the pattern
/*      *
        * *
        * * *
        * * * *
        * * * * *
*/
let star = 1;

for(let i = 1; i <= 5;++i)
{   
    let s = "";
    for(let j = 0; j < i; j++){
        s += "* ";
    }
    console.log(s);
    console.log("");
}

//Task 08 : write a program to print numbers form 1 to 10, skip number 5 using continue statement.  
for( let num = 1; num <=10; num++){
    if(num == 5) continue;
    console.log(num);
}
console.log("\n")
//Task 09: Write a program to print numbers from 1 to 10, but stop at number 7 using break statement.
for( let num = 1; num <=10; num++){
    if(num == 7) break;;
    console.log(num);
}