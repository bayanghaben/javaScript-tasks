const card = document.querySelectorAll(".card_inner");
// card.addEventListener("click", function (e) {
//   card.classList.toggle("is-flipped");
// });

[...card].forEach((card) => {
  card.addEventListener("mouseover", function () {
    card.classList.toggle("is-flipped");
  });
});
