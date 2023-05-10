import { display, scores } from "./module-grade.js";
let q1 = prompt("Would you like to display all scores? Y/N:");

display(q1);

let q2 = prompt("Would you like to average the scores for each test? Y/N:");
scores(q2);
