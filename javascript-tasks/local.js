const input = document.querySelector("input");
const h2 = document.querySelector("h2");
h2.innerHTML = localStorage.getItem("value");
input.addEventListener("keyup", display);
function display() {
  // h2.innerHTML = input.value;
  localStorage.setItem("value", input.value);
  localStorage.getItem("value");
  h2.innerHTML = localStorage.getItem("value");
}

// export default User;
// export { printName, printAge };
