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
