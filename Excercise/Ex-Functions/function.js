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
