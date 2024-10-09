let count = parseInt(document.getElementById("account").textContent)
  
const buttons = document.querySelectorAll('.btn');

const decreaseButton = buttons[0];
const resetButton = buttons[1];
const increaseButton = buttons[2];
const result = document.getElementById("account")

decreaseButton.addEventListener("click", () => {
  count--;
  result.textContent = count
})

resetButton.addEventListener("click", () => {
  count= 0;
  result.textContent = count
})
increaseButton.addEventListener("click", () => {
  count++;
  result.textContent = count
})