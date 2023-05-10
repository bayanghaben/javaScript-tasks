let name = ["ali", "khaled", "mais", "waed", "mazen"];
let math = [95, 79, 94, 99, 96];
let science = [86, 71, 87, 77, 95];
let coding = [83, 79, 87, 91, 99];
let fitness = [81, 87, 83, 79, 82];
let communication = [79, 72, 82, 80, 70];

export let display = function (n) {
  if (n === "y") {
    console.log(name);
    console.log(math);
    console.log(science);
    console.log(coding);
    console.log(fitness);
    console.log(communication);
  }
};
// let q2 = prompt("Would you like to average the scores for each test? Y/N:");
// scores(q2);
export let scores = function (q) {
  if (q === "y") {
    console.log(`Math test average = ${sum(math) / math.length} `);
    console.log(`Math test average = ${sum(science) / science.length} `);
    console.log(`Math test average = ${sum(coding) / coding.length} `);
    console.log(`Math test average = ${sum(fitness) / fitness.length} `);
    console.log(
      `Math test average = ${sum(communication) / communication.length} `
    );
  }
  function sum(math) {
    return math.reduce((acc, curr) => acc + curr);
  }
};
