// let bmiCalculater = function (height, weight) {
//   document.querySelector(".bmi_Result").textContent = "";
//   weight = document.querySelector(".weight").value;
//   height = document.querySelector(".height").value;
//   let bmiResult = weight / (height / 100) ** 2;

//   if (!bmiResult) {
//     document.querySelector(".bmi_Result").textContent +=
//       "Inter your weight & height!";
//   } else {
//     bmiResult = bmiResult.toFixed(2);
//     document.querySelector(".bmi_Result").textContent += bmiResult;
//   }
//   return bmiResult;
// };
// document.querySelector(".calcBmi").addEventListener("click", bmiCalculater);

document.querySelector(".calcBmi").addEventListener("click", () => {
  document.querySelector(".bmi_Result").textContent = "";
  document.querySelector(".height").textContent = "";
  // document.querySelector(".weight").textContent = "";
  let weight = document.querySelector(".weight").value;
  let height = document.querySelector(".height").value;
  let bmiResult = weight / (height / 100) ** 2;
  if (!bmiResult) {
    document.querySelector(".bmi_Result").textContent +=
      "Enter your weight & height!";
    document.body.classList.add("warning");
  } else {
    bmiResult = bmiResult.toFixed(2);
    document.querySelector(".bmi_Result").textContent = bmiResult;
    document.body.classList.remove("warning");
  }
});
