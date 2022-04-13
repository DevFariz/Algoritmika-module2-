const tasksBox = document.querySelector(".tasks");
const input = document.querySelector(".inp");
const text = document.querySelector(".task__content");
const btnAdd = document.querySelector(".add");
const btnRemove = document.querySelector(".remove")


input.addEventListener("keyup", (event) => {
  if(event.key == "Enter"){
    text.style.padding = "12px 30px 12px 27px"
    text.textContent = input.value;
    input.remove()
  }
})