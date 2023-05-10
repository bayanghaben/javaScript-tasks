// "use strict";

// let cash = 1000;
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
