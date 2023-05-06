//Loops Duration: 2 hours
// 1. Write a script to print out all even numbers between 1 and 50, twice.
// Use 1 for loop and 1 while loop
//print 1-50 using For
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even Number`);
  }
}
////print 1-50 using While
let i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(`${i}=even`);
  }
  i++;
}
// 2.Try solving the previous exercise using a single for loop.

// 3. Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd ones.
for (let i = 1; i <= 50; i++) {
  if (!(i % 2 === 0)) {
    console.log(`${i} is an odd Number`);
  }
}
//4. Fizz-Buzz! Write a script that does the following:
// ● Counts from 1 to 100 and prints out something for each number:
// ○ If the number is divisible by 3, print "Fizz"
// ○ If the number is divisible by 5, print "Buzz"
// ○ If the number is divisible by both 3 and 5, print "FizzBuzz"
// ○ If the number does not meet any of the above conditions, just print the number
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//5. Rewrite the script with a function so that each iteration will trigger a function call.
// Sample Input: fizzBuzz(1)
// Sample Output: 1
// Sample Input: fizzBuzz(15)
// Sample Output: FizzBuzz

let fizzBuzz = function (n) {
  if (n % 5 === 0 && n % 3 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0 && n % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
};

fizzBuzz(1);
// //
// 6. Create a recursive solution. A FizzBuzz function calls itself to continue the series.
function fizzBuzzRecursive(n) {
  if (n === 0) {
    return;
  }
  fizzBuzzRecursive(n - 1);
  if (n % 5 === 0 && n % 3 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0 && n % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
fizzBuzzRecursive(10);
//
//Write a function that takes a number and converts it to certain banknotes.
// Sample Input: (57, [25, 10, 5, 1])
// Sample Output: 25, 25, 5, 1, 1
// function convertToBanknotes(number, banknoteValues) {
//   let result = "";
//   for (let i = 0; i < banknoteValues.length; i++) {
//     while (number >= banknoteValues[i]) {
//       result += banknoteValues[i] + ", ";
//       number -= banknoteValues[i];
//     }
//   }
//   return result.substring(0, result.length - 2);
// }
// convertToBanknotes(57, [25, 10, 5, 1]);

// function convertNumberToBanknotes(number, banknotes) {
//   // Create an array to store the banknotes
//   const convertedBanknotes = [];
//   // Iterate through the banknotes array
//   for (let i = 0; i < banknotes.length; i++) {
//     // Get the current banknote
//     const banknote = banknotes[i];
//     // Calculate the number of banknotes that can be created from the number
//     const numBanknotes = Math.floor(number / banknote);
//     // Add the number of banknotes to the converted banknotes array
//     convertedBanknotes.push(numBanknotes);
//     // Subtract the number of banknotes from the number
//     number -= numBanknotes * banknote;
//   }
//   // Return the converted banknotes array
//   return convertedBanknotes;
// }
// convertNumberToBanknotes(57, [25, 10, 5, 1]);
// //
// 8. Write a function that counts the existence of a specific character within a string, despite the case.
// Sample Input: (“Coding Academy by Orange”, “o”)
// Sample Output: 2
function countCharOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}
countCharOccurrences("Coding Academy by Orange", "O");

function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    // check if the character is at that position
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
countString("Coding Academy by Orange", "O");
//
// 9. Write for loops that accomplish the following tasks:
// a. Print the numbers 0 - 20, one number per line.
for (i = 0; i <= 20; i++) {
  console.log(i);
}
// b. Print only the ODD values from 3 - 29, one number per line.
for (i = 3; i <= 29; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (i = 12; i >= -14; i--) {
  console.log(i);
}
// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3
for (i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 10. Initialize two variables to hold the string 'CodingAcademy' and the
// array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:
// e. Print each element of the array to a new line.
const str = "CodingAcademy";
const arr = [7, 500, "KH404", "black", 36];
for (i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
// f. Print each string character in reverse order to a new line
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str.charAt(i));
}
//11. Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays:
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate
let evenArr = [];
let oddArr = [];
const numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
for (let i of numbers) {
  if (i % 2 === 0) {
    evenArr.push(i);
  } else {
    oddArr.push(i);
  }
}
console.log(evenArr);
console.log(oddArr);
//
// 12. Write the code to create meals using elements from these arrays, ensuring the rules below.
// Protein options:
// ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
// Grain options:
// ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
// Vegetable options:
// ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
// Beverage options:
// ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
// Dessert options
// ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
// • The number of meals is determined as an input.
// • The meals must include one item from each category.
// • No two meals should be identical.
