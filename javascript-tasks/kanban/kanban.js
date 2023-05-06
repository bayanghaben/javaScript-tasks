// Target elements
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");
const addCardBtn1 = document.querySelector(".btn1");
const addCardBtn2 = document.querySelector(".btn2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

// addCardBtn1.addEventListener("click", () => {
//   const card = document.createElement("h5");
//   card.classList.add("card");
//   let inputText = input1.value;
//   column1.appendChild(card);

//   // Add and append delete button to card element
//   const removeButton = document.createElement("button");
//   removeButton.innerText = "Remove";
//   card.appendChild(removeButton);
//   removeButton.addEventListener("click", () => {
//     // Remove card from DOM
//     card.remove();
//   });
// });
// addCardBtn1.addEventListener("click", (e) => {
//   addCard();
// });

// function addCard() {
//   let inputText = input1.value;
//   if (inputText) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     column1.appendChild("card");

//     const cardText = document.createElement("h5");
//     cardText.classList.add("card_text");
//     cardText.textContent = inputText;
//     card.appendChild(cardText);
//   }
//   card.addEventListener("click", () => {
//     card.remove();
//   });
// }
// }

// column 1
// Add event to button
addCardBtn1.addEventListener("click", () => {
  // Add and append card element to column
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = input1.value;
  column1.appendChild(card);

  // Add and append delete button to card element
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  card.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    // Remove card from DOM
    card.remove();
  });
});
// });
// column 2
// Add event to button
addCardBtn2.addEventListener("click", () => {
  // Add and append card element to column
  const card = document.createElement("h5");
  card.classList.add("card");
  card.textContent = input2.value;
  column2.appendChild(card);

  // Add and append delete button to card element
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  card.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    // Remove card from DOM
    card.remove();
  });
});

document.querySelector(".dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // document.querySelector(".toggle__btn").textContent = "Light";
  document.querySelector(".toggle__btn").classList.toggle("d");
  document.querySelector(".toggle__btn").classList.toggle("rotate");
});
