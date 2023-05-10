const card = document.querySelectorAll(".card_inner");
// card[1].addEventListener("click", function (e) {
//   card[1].classList.toggle("is-flipped");
// });

[...card].forEach((card) => {
  card.addEventListener("click", function () {
    removeClass();
    card.classList.add("is-flipped");
  });
});
const removeClass = () => {
  card.forEach((card) => {
    card.classList.remove("is-flipped");
  });
};
// [...card].forEach((card) => {
//   card.addEventListener("click", function () {
//     card.classList.toggle("is-flipped");
//   });
// });
// card.forEach((card) => {
//   card.addEventListener("click", function () {
//     card.classList.toggle("is-flipped");
//   });
// });
// console.log(card);
