"use strict";
let cash = 1000;
// let currentLiabilities = 500;
// CashFlowRatio: cash / currentLiabilities;
// console.log(cash / currentLiabilities);

// let revenues = 1000;
// let income = 500;
// netIncome_: revenues - income;
// console.log(revenues - income);

// console.log(1000 + 500);
// let liabilities = 1000;
// let sales = 500;
// totalassets = liabilities + sales;
// console.log(liabilities + sales);
// console.log(1000 * 500);
// let profitMargin = 1000;
// sales = 500;
// let netIncome;
// netIncome = profitMargin * sales;
// console.log(netIncome);

// let num1 = 7;
// let num2 = 9;
// let num3 = 2;
// let average;
// average = (num1 + num2 + num3) / 3;
// console.log(average);

// let originalprice = 150;
// let discountp = 0.3;
// let discount;
// discount = originalprice - originalprice * discountp;
// console.log(discount);

// let age = 20;
// // if (age > 18 && age < 30) {
// //   print("true");
// // }
// console.log(age > 18, age < 30);

// let numA = 2;
// let numB = 3;
// exponintioal = 2 ** 3;
// console.log(exponintioal);
// let numa1 = 10;
// let numa2 = 4;
// let remainder;
// remainder = numa1 % numa2;
// console.log(remainder);
// ////////////////////////////////////////////////////////////////////

console.log(typeof 100);
// console.log(typeof 73.9);
// console.log(typeof NaN); //NaN is a number that is not a legal number. The Number. isNaN() method returns true if the value is NaN , and the type is a Number.//
// console.log(typeof water); //not initialise variable
// console.log(typeof false); //boolean has just 2 value , true or false
// // console.log(typeof 9 != 11);
// console.log("orang" + "e");
// console.log("orange" - "s");
// console.log("4" + "8");
// console.log("4" - "8");
// console.log("name" + 3);
// console.log("name" - 3);
// console.log(82 * "word");
// console.log(1 + "hello");
// console.log("hello" + 1);
// console.log(1 + true);
// console.log("hello" + true);
// console.log(typeof infinity);
// console.log(1 == "1");
// console.log(1 === "1");
// ///////////////////////////////////////////////////////////////////////////////

let firstName = "Bayan";
console.log(firstName.length);
console.log(firstName.charAt(3));

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits.slice(1, 3));

// ////////////////////////////
// const girl = "bayan nasir";
// console.log(girl.substring(3, 8)); //8 does not count, it wrote from 3 to 7;
// console.log(girl.substring(10, 1)); //8 does not count, it wrote from 3 to 7;
// console.log(girl.slice(3, 8)); //8 does not count, it wrote from 3 to 7;
// console.log(girl.slice(10, 1)); //slice start value must be smaller than end value
// console.log(girl.substring(3)); //strat from 3 to end
// console.log(girl.substring(-3)); //start from zero to end
// //
const girlAndAge = "bayan nasir-23.";
const dashIndex = girlAndAge.lastIndexOf(" ");
console.log(dashIndex);
console.log(girlAndAge.substring(dashIndex));
console.log(girlAndAge.substring(0, dashIndex));
console.log(girlAndAge.substring(dashIndex - 1));
console.log(girlAndAge.substring(dashIndex + 1));
console.log(girlAndAge.substr(2, 4)); // start from latter 2 and write 4 letters after it
// //replace
// const text = "i have a blue car and blue bag and blue dress ";
// const text2 = text.replaceAll(/blue/g, "red");
// console.log(text2);
// //to uppercase
// const text3 = text.toLowerCase();
// const text4 = text.toUpperCase();
// console.log(text3);
// //concat
// const str1 = "sea";
// const str2 = "food";
// const str3 = str1.concat(str2);
// console.log(str3);
// //trim+ trimStart+trimEnd
const nm = "        hellow world               ";
console.log(nm.trim());
console.log(nm.trimStart());
console.log(nm.trimEnd());
// //padStart/padEnd
const s = "dom";
const news = s.padStart(7, "*");
console.log(news);
// const news1 = s.padEnd(7, "*");
// console.log(news1);
// //split
// const string = "life is hard";
// const ar = string.split();
// console.log(ar); //nothing happend

// const ar1 = string.split(" "); //select all spaces
// console.log(ar1);

// const ar2 = string.split(""); // select every letter
// console.log(ar2);

// const ar3 = string.split("s"); //split the string from S letter
// console.log(ar3);

// const ar4 = string.split("s", 1); //first part of s split
// console.log(ar4);
// const ar5 = string.split("s", 0); //non parts of s split
// console.log(ar5);

// //search
// let t00 = "the rain in SPAIN staysmainlyin the  plain";
// let t100 = t00.search("rain");
// console.log(t100);

// let t000 = "the rain in SPAIN staysmainlyin the  plain";
// let t1000 = t000.matchAll("rain");
// console.log(t1000);

// //START WITH, END With
// let text7 = "Hello world, welcome to the universe.";
// let result = text7.startsWith("Hello");
// console.log(result);
// //include
// let text9 = "Hello world, welcome to the universe.";
// let result1 = text9.includes("welcome");
// console.log(result1);
// //
// let greating = "welcome to Orange";
// let sorange = greating.toUpperCase();
// console.log(sorange);
// let sorange1 = sorange.substring(8, 10);
// console.log(sorange1);
// let hello = greating.replace("welcome to", "Hello from");
// console.log(hello);
// let greating1 = greating.length;
// console.log(greating1);
// let greating2 = 'welcome to "orange" ';
// console.log(greating2);
// let cont = " Jordan";
// let greating3 = greating.concat(cont);
// console.log(greating3);
// //cactus
// let veg = "cactus";
// let vegreplace = veg.replaceAll("c", "*");
// console.log(vegreplace);
// let veg2 = vegreplace.replace("*", "c");
// console.log(veg2);

// //Arrays
// //pop
// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers); //pop delete the last item in arrays
// //to return the popped value we can storage it in a Variable
// const popped = numbers.pop();
// console.log(popped);
// //shift[delete first value of arrays]
// numbers.shift();
// console.log(numbers);
// //push
// //add elements to arrays
// const number = [1, 2, 3];
// number.push(4); // add number to arrays
// number.push(5, 6, 7); // add number to arrays
// console.log(number);
// //unshift
// //add elements to the start of arrays
// const num = ["sara", "suha", "jehad", "ibra"];
// num.unshift("Ahmad");
// console.log(num);
// //indexOf

// console.log(num.indexOf("jehad"));
// console.log(num.indexOf("bayan")); //not exist in the array will give -1//

// //includes
// console.log(num.includes("bayan"));
// console.log(num.includes("sara"));
// //

// //to string[convert numbers and arrays]
// let friends = ["sarah", "rahaf", "reem", "fatemah"];
// console.log(friends);
// friends = friends.toString();
// console.log(friends);
// //join:Method and how it can be used to join an array of items into a single string separated by a separator.
// let friendsSchool = ["sarah", "rahaf", "reem", "fatemah"];
// console.log(friendsSchool.join("-"));
// //CONCAT
// let n1 = [1, 2, 3];
// console.log(n1.concat([4, 5, 6]));
// //
// let n2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(n2.splice(0, 4)); //removeditems
// console.log(n2.slice(0, 4));
// let n3 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(n3.slice(4, 7));
// ////////////////////////////////////////////////////////////
// //task
// const code = ["Coding", "Academy", "By", "Orange"];
// code.push("Jordan");
// console.log(code);
// console.log(code.slice(0, 2));
// code.unshift("Welcome", "to");
// console.log(code);
// code.shift();
// code.shift();
// code.shift();
// code.pop();
// console.log(code);
// code.unshift("Coding");
// console.log(code);
// console.log(code.join(" "));
// console.log(code);
// code.splice(1, 2);
// console.log(code);
// /////////////////////////////////////////////////
// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "papper", "lettuce"];
// vegetables.pop();
// console.log(vegetables);
// fruit.shift();
// console.log(fruit);

// console.log(fruit.indexOf("orange"));
// fruit.push(4);
// console.log(fruit);
// console.log(vegetables.length);
// let food = fruit.concat(vegetables);
// console.log(food);
// food.splice(4, 2);
// console.log(food);
// food.reverse();
// console.log(food);
// console.log(food.toString());
/////////////////////////////////////////////////////////
//<<Excersice>>//
//Functions <--1-->
let text = "orange Jordan";
let textToArray = text.split(" ");
console.log(textToArray);
//Functions <--2-->
let phonenum = "0776807777";
function hiddenNumber() {
  let e0phone = phonenum.slice(6, 10);
  let e1phone = e0phone.padStart(10, "*");
  console.log(e1phone);
  return e1phone;
}
console.log(hiddenNumber());

//
// let phonenum1 = "0776807777";
// for(let i=phonenum1.indexOf(0,7);;){

// }

//Functions <--3-->

let email = "orange_academy@orange.jo";
// let editedEmail = email.replace("_academy", "...");
function hiddenEmail() {
  const underscoreIndex = email.indexOf("_");
  let afterEmail = email.substring(0, underscoreIndex).concat(`...@orange.com`);
  console.log(afterEmail);
  return afterEmail;
}
console.log(hiddenEmail());
//<<functions part-5>>
// let theSentence = "coding academy by orange";
let g = function (theSentence) {
  let word = theSentence.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toLocaleUpperCase() + word[i].substring(1);
  }
  return word.join(" ");
};
console.log(g("coding academy by orange"));
//

// <<--functions part-6-->>//
let aNumber = "92485";
function reverseString() {
  const numberToArray = aNumber.split("").reverse().join();
  return numberToArray;
}
console.log(reverseString());
// or;

function reverseString2(j) {
  return j.split("").reverse().join();
}
console.log(reverseString2("92385"));

// //<<functions part-7>>
// 7. Write a function that swaps the value of 2 variables in at least three ways.
// Sample Input: a=3, b=4
// Sample Output: a=4, b=3
//Destructuring assignment:-
function swap(u, w) {
  const d = ([u, w] = [w, u]).join();
  return d;
}
console.log(swap(3, 4));
// use arthemitic operators:-
function swap2(u, w) {
  u = u + w;
  w = u - w;
  u = u - w;
  return `${u},${w}`;
}
console.log(swap2(3, 4));
//using third temporary variable
function swap3(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;

  return `${x},${y}`;
}
console.log(swap3(2, 3));
//
//8. Write a function that removes an indexed character from a string.
// Sample Input: (“Orange”, 3)
// Sample Output: Orage
let remove = function (text, index) {
  return text.substring(0, index) + text.substring(index + 1);
};
//EXECUTION
console.log(remove("Orange", 3));
//.9 Write a function that merges two strings after removing the first character of each one.
// Sample Input: (“lora”, “inge”)
// Sample Output: orange
let merge = function (text1, text2) {
  return text1.substring(1) + text2.substring(1);
};
console.log(merge("lora", "inge"));
//10. Write a function that ensures a specific character appears in a string's first or last position.
// Sample Input: (“o”, “orange”)
// Sample Output: true
// Sample Input: (“z”, “orange”)
// Sample Output: false
let StartWithEndWith = function (letter, text5) {
  let search = text5.startsWith(letter) || text5.endsWith(letter);
  return search;
};
console.log(StartWithEndWith("o", "orange"));
console.log(StartWithEndWith("z", "orange"));
// 11. Write a function that takes a string and returns every word in the string as an array element.
// Sample Input: “Coding Academy by Orange”
// Sample Output: [“Coding”, “Academy”, “By”, “Orange”]
let returnInArray = function (text6) {
  return text6.split(" ");
};
console.log(returnInArray("Orange In Touch"));
//
// 12. Write a function that takes a string and reorders the characters alphabetically.
// Sample Input: “Orange”
// Sample Output: “aegnor”
let reOreder = function (text8) {
  return text8.split("").sort().join("");
};
console.log(reOreder("Orange"));
//<<<<<<<<CONDITIONAL>>>>>>>>\\
// 1. If someone is applying to the academy’s website, create the conditional to cover these situations:
// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”
// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”
// ● If the candidate is younger than 18, print out: “You may join the kids' program.”
// ● If the candidate is older than 60, print out: “You may join the seniors’ program.”
// ● Calculate the age using the year of birth dynamically
let ageAcceptable = function (age) {
  let userAge = 2023 - age;
  if (userAge > 60) {
    return `You may join the seniors’ program.`;
  } else if (userAge > 30) {
    return `You are not eligible. You may join other programs.`;
  } else if (userAge > 18) {
    return `“You are eligible. Start your application.`;
  }
};
console.log(ageAcceptable(1950));
//
// 2. Write a function that takes a string and switches the letters' case from upper to lower and vice
// versa.
// Sample Input: “OrAnGe”
// Sample Output: “oRaNgE”
function switchCase(str) {
  let newStr = "";

  for (let i = 0; i < str.length - 1; i++) {
    // without convert to arrays
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}
console.log(switchCase("AsDzHr"));
//3. Write a function that takes a string, capitalizes each word's first letter, and removes all spaces
// (Camel Case).
// Sample Input: “Coding Academy by Orange”
// Sample Output: “CodingAcademybyOrange”
let convertCaseAndDelete = function (text11) {
  let word = text11.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substring(1);
  }
  return word.join("");
};
console.log(convertCaseAndDelete("coding academy by orange"));
//4. Write a function that removes a specific element in an array.
// Sample Input: ([“Coding”, “Academy”, “By”, “Orange”], “By”)
// Sample Output: [“Coding”, “Academy”, “Orange”]
let removeElementArrayy = function (array, text) {
  return array
    .slice(0, array.indexOf(text))
    .concat(array.slice(array.indexOf(text) + 1));
};

console.log(removeElementArrayy(["Coding", "Academy", "By", "Orange"], "By"));
//5. Write a function that checks if a number is odd or even.
let checkOddEven = function (check) {
  if (check % 2 == 0) {
    return `even`;
  } else {
    return `odd`;
  }
};
console.log(checkOddEven(5));
//6. Write a function that checks whether an input variable is a number.
let checkNumber = function (number) {
  if (typeof number === "number") {
    return `the input is a number`;
  } else {
    return `the input is Not a Number`;
  }
};
console.log(checkNumber("y"));
//7. Write a function that finds the largest of two numbers.
let largestNumber = function (a, b) {
  if (a > b) {
    return `the largest is ${a}`;
  } else {
    return `the largest is ${b}`;
  }
  // return `the largest is ${Math.max(a, b)}`;
};
console.log(largestNumber(2, 7));
//8. Write a function that checks if a triangle is equilateral, scalene, or isosceles.
let traingle = function (x, y, z) {
  if (x === y && y === z) {
    return `triangle is equilateral`;
  } else if (x === y || y === z || z === x) {
    return `triangle is scalene`;
  } else {
    return `triangle is isosceles`;
  }
};
console.log(traingle(46, 77, 4));
//9. Write a function that finds if a number is present in a given range.
let test_range = function (min, max, x) {
  if (min <= x && x <= max) {
    return `The number is in the given range`;
  } else {
    return `The number is outside the given range.`;
  }
};
console.log(test_range(2, 10, 1));
//10. Write a function that checks whether a year is a leap year.
let leap = function (year) {
  if (year % 4 == 0) {
    return `It's a leap year`;
  } else {
    return `Not a leap year`;
  }
};
console.log(leap(2016));
//Loops Duration: 2 hours
// 1. Write a script to print out all even numbers between 1 and 50, twice.
// Use 1 for loop and 1 while loop
for (let i = 1; i <= 100; i++) {
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

fizzBuzz(14);
// //
