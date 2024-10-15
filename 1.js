//#1
// let number = Number(prompt('Enter number: '));

// function printSeries(n) {
//     let i = 1;
//     let j = 1;
//     while (j <= n) {
//         if (i % 2 !== 0) {
//             console.log(2 * j - 1);
//         } else {
//             console.log(Math.pow(4, j / 2));
//         }
//         i++;
//         j++; 
//     }
// }
// printSeries(10);  

//  Output 1, 4, 5, 16...


//#2

// let n = parseInt(prompt("Enter a number: "));

// for (let i = -n; i <= n; i++) {
//     console.log(i);
// }

//#3

// let n = parseInt(prompt("Enter a number: "));
// let total = 0;
// for (let i = 1; i <= n; i++) {
//     total += i;
// }
// console.log("The total sum is: " + total);

//#4

// let num = 1;
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let line = "";

//     for (let j = 1; j <= i; j++) {
//         line += num;
//         num++;
//     }

//     console.log(line);
// }


//#5

// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//     let line = ""; 
//     for (let j = i; j <= rows; j++) {
//         line += j;
//     }

//     console.log(line);
// }
