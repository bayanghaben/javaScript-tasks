const numberGuesser = (numberGuess) => {
  // Validate guess is valid before checking if it's correct
  if (numberGuess > 10 || numberGuess <= 0) {
    throw RangeError(
      `Invalid Guess: ${numberGuess}, number must be between 1 and 10, inclusive`
    );
  }
};
numberGuesser(0);

// const firstName = (firstname) => {
function generateReferenceError() {
  // Undefined variable
  var foo;
  foo.bar();
}
// Define the variable before referencing it
var foo = "bar";
foo.bar();

// Use the typeof operator to check if the variable is defined
if (typeof foo !== "undefined") {
  foo.bar();
} else {
  // Do something else
}
